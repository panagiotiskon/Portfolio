const chipTagText = (text: string, color?: string) => {
  if (text.length === 0) {
    return <></>;
  }

  if (!color) {
    return <>{text}</>;
  }

  const regex = /\{([^}]+)\}/g;
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="inline-flex items-center justify-center px-2 py-0.5 mx-0.5 rounded-sm text-gray-100 font-bold font-jetbrains text-sm align-middle shadow-sm"
            >
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};
export default chipTagText;
