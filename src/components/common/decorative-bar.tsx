function DecorativeBar({ bgColour }: { bgColour: string }) {
  return <div className={`w-1 h-[43px] mr-4 rounded-full bg-${bgColour}`} />;
}

export default DecorativeBar;
