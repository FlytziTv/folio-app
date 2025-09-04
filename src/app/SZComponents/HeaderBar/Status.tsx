const statuses = {
  Available: {
    description: "Disponible pour une alternance.",
    color: "bg-[var(--chart-1)]",
    textColor: "text-[var(--chart-1)]",
  },
  Unavailable: {
    description: "Indisponible pour une alternance.",
    color: "bg-[var(--chart-6)]",
    textColor: "text-[var(--chart-6)]",
  },
};

export const Status = ({
  status = "Available",
}: {
  status?: keyof typeof statuses;
}) => {
  const current = statuses[status];

  return (
    <div className="flex items-center gap-4px justify-center">
      <div className="flex items-center relative w-6 h-6">
        {/* LED 1 : allumée, fixe */}
        <span
          className={`absolute ${current.color} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[6px] h-[6px]`}
        ></span>
        {/* LED 2 : pulsation */}
        <span
          className={`absolute ${current.color} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[10px] h-[10px] led-pulse`}
        ></span>
      </div>
      <p className={`text-sm font-extralight ${current.textColor}`}>
        {current.description}
      </p>
    </div>
  );
};
