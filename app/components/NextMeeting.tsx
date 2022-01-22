import luxon from "luxon";

export function NextMeeting() {
  const dt = luxon.DateTime.fromObject(
    { year: 2021, month: 12, day: 4, hour: 12, minute: 0 },
    { zone: "America/Chicago" }
  );
  const diff = luxon.DateTime.now().diff(dt, "weeks").toObject().weeks || 0;
  const weeks = 2 * Math.ceil(diff / 2);
  return (
    <span className="font-bold">
      {dt.plus({ weeks: weeks }).toFormat("LLLL d")}
    </span>
  );
}
