const ScrollingTicker = () => {
  const tickerText = "We're excited to open new clinics in Richmond, Virginia | Meridian, Idaho & Sterling Heights, Michigan ♦ Now accepting new clients ♦ No waitlist for services";

  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden whitespace-nowrap">
      <div className="animate-[scroll_30s_linear_infinite] inline-block">
        <span className="px-4">{tickerText}</span>
        <span className="px-4">{tickerText}</span>
        <span className="px-4">{tickerText}</span>
      </div>
    </div>
  );
};

export default ScrollingTicker;