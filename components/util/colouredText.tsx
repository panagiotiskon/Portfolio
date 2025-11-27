const colouredText = (text: string) => {
  if (text.length === 0) {
    return <></>;
  }
  const regex = /\{([^}]+)\}/g;
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <span key={index} className="text-lightBlue">
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

export default colouredText;
