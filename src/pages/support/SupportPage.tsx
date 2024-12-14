import SupportScreen from "./SupportScreen";
import ContactUs from "./ContactUs";

export default function SupportPage() {
  return (
    <div id="support" className="md:pb-[120px] sm:pt-[100px] text-white overflow-hidden">
      <SupportScreen />
      <ContactUs />
    </div>
  );
}
