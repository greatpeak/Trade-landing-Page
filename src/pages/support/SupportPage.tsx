import SupportScreen from "./SupportScreen";
import ContactUs from "./ContactUs";

export default function SupportPage() {
  return (
    <div id="support" className="md:pt-[120px] pt-[100px] text-white overflow-hidden">
      <SupportScreen />
      <ContactUs />
    </div>
  );
}
