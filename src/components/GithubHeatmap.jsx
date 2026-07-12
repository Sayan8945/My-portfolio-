import { useEffect, useState, useMemo } from 'react';

/**
 * Renders a GitHub-style contribution heatmap (weeks as columns, days as rows)
 * for the given username, fetched live from a free public API.
 *
 * Layout/behaviour mirrors github.com/<user>'s contribution graph:
 * - 7 rows (Sun–Sat) x ~53 columns (weeks)
 * - Month labels above the grid
 * - 5-level color scale + legend
 * - Hover tooltip with date + contribution count
 */

const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// GitHub's actual level color scale (dark theme), re-tinted slightly toward
// the site's cyan accent while keeping the classic green feel recognizable.
const LEVEL_COLORS = ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'];

const CELL_SIZE = 11;
const CELL_GAP = 3;

const GithubHeatmap = ({ username }) => {
  const [contributions, setContributions] = useState(null);
  const [total, setTotal] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setContributions(data.contributions || []);
        setTotal(data.total?.lastYear ?? null);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  // Group the flat day list into weeks (columns), padded so weeks start on Sunday.
  const { weeks, monthMarkers } = useMemo(() => {
    if (!contributions || contributions.length === 0) return { weeks: [], monthMarkers: [] };

    const days = contributions.map((d) => ({ ...d, dateObj: new Date(d.date + 'T00:00:00') }));

    // Pad the front so the first column starts on a Sunday.
    const firstDow = days[0].dateObj.getDay(); // 0 = Sunday
    const padded = [...Array(firstDow).fill(null), ...days];

    const cols = [];
    for (let i = 0; i < padded.length; i += 7) {
      cols.push(padded.slice(i, i + 7));
    }

    // Determine which column each new month starts in, for the top labels.
    const markers = [];
    let lastMonth = null;
    cols.forEach((week, colIndex) => {
      const firstValidDay = week.find(Boolean);
      if (!firstValidDay) return;
      const month = firstValidDay.dateObj.getMonth();
      if (month !== lastMonth) {
        markers.push({ colIndex, label: MONTH_NAMES[month] });
        lastMonth = month;
      }
    });

    return { weeks: cols, monthMarkers: markers };
  }, [contributions]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-[140px] text-white-500 text-sm">
        Loading contribution graph…
      </div>
    );
  }

  if (status === 'error' || weeks.length === 0) {
    return (
      <div className="flex items-center justify-center h-[140px] text-white-500 text-sm text-center px-4">
        Couldn&apos;t load live GitHub data right now. View the profile directly on{' '}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-[#22D3EE] ml-1 hover:underline">
          github.com/{username}
        </a>
        .
      </div>
    );
  }

  const gridWidth = weeks.length * (CELL_SIZE + CELL_GAP);

  return (
    <div className="w-full">
      {total !== null && (
        <p className="text-white-600 text-sm mb-3">
          <span className="text-white font-semibold">{total}</span> contributions in the last year
        </p>
      )}

      <div className="w-full overflow-x-auto pb-2">
        <div style={{ minWidth: gridWidth + 34 }}>
          {/* ── Month labels ─────────────────────────────────── */}
          <div className="flex ml-8 relative" style={{ height: 16 }}>
            {monthMarkers.map((m, i) => (
              <span
                key={i}
                className="absolute text-[11px] text-white-500"
                style={{ left: m.colIndex * (CELL_SIZE + CELL_GAP) }}>
                {m.label}
              </span>
            ))}
          </div>

          <div className="flex gap-[3px]">
            {/* ── Day-of-week labels ───────────────────────────── */}
            <div className="flex flex-col gap-[3px] mr-1" style={{ width: 28 }}>
              {DAY_LABELS.map((label, i) => (
                <span
                  key={i}
                  className="text-[10px] text-white-500 flex items-center"
                  style={{ height: CELL_SIZE }}>
                  {label}
                </span>
              ))}
            </div>

            {/* ── Weeks grid ───────────────────────────────────── */}
            <div className="flex gap-[3px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) => {
                    if (!day) {
                      return <div key={di} style={{ width: CELL_SIZE, height: CELL_SIZE }} />;
                    }
                    const isHovered = hovered?.date === day.date;
                    return (
                      <div
                        key={di}
                        onMouseEnter={() => setHovered(day)}
                        onMouseLeave={() => setHovered(null)}
                        title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                        className="rounded-sm cursor-pointer transition-transform"
                        style={{
                          width: CELL_SIZE,
                          height: CELL_SIZE,
                          backgroundColor: LEVEL_COLORS[day.level] || LEVEL_COLORS[0],
                          outline: isHovered ? '1.5px solid #22D3EE' : 'none',
                          transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Legend ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-end gap-1.5 mt-3 text-[11px] text-white-500">
        <span>Less</span>
        {LEVEL_COLORS.map((c, i) => (
          <span key={i} className="rounded-sm" style={{ width: CELL_SIZE, height: CELL_SIZE, backgroundColor: c }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export default GithubHeatmap;
