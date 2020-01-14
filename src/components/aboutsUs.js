import React, {useState} from "react";
import Modal from 'react-modal';


import siteLogg from "../assets/images/bg2.png";



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '70%',
    height                : '50%'
  }
};
export default function AboutUs() {
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);


  return (
    <section id="our-about" className="px-6 mt-0 pt-10 lg:px-12 xl:px-16 lg:pt-20  z-0 ">

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Terms and Conditions"
      >
        <button onClick={() => closeModal()} className="text-right">X</button>
        <h2 className="text-primarycolor text-xl underline text-center">Terms and Conditions</h2>
        <p className="text-sm">By booking or participating in a tour and any related products or services (a “Tour”) with GOLDEN CLOUD
          TRAVEL AND TOUR, you (“you”) agree to these Terms & Conditions (the “Terms”): By booking a Tour you
          acknowledge that you have read, understood and agree to be bound by these Terms. If you make a booking
          on behalf of other participants, you guarantee that you have the authority to accept and do accept these
          Terms on behalf of the other participants in your party.</p>
        <br/>
        <ol>
          <li>
            <h2 className="text-primarycolor underline text-sm ">1. THE BOOKING CONTRACT</h2>
            <p className="text-sm">
              Your booking is confirmed and a contract exists when the Tour Operator or your travel agent issues a
              written confirmation after receipt of the applicable deposit amount. Please check your confirmation
              carefully and report any incorrect or incomplete information to the Tour Operator or authorized agent
              immediately. Please ensure that names are exactly as stated in the relevant passport.
              You must be at least 18 years of age to make a booking. You agree to provide full, complete and
              accurate information to the Tour Operator.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">2. BOOKING ON BEHALF OF OTHERS</h2>
            <p className="text-sm">
              By booking on behalf of other participants, you are deemed to be the designated contact person for every
              participant included on that booking. This means that you are responsible for making all payments due in
              connection with your Tour booking, notifying the Tour Operator or your travel agent if any changes or
              cancellations are required and keeping your party informed.

              By booking on behalf of another person or persons, you represent and warrant that you have obtained all
              required consents. You are responsible for verifying that any information you provide on behalf of
              another participant is complete and accurate and the Tour Operator will under no circumstances be liable
              for any errors or omissions in the information provided to complete a booking.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">3. REQUIRED MEDICAL INFORMATION</h2>
            <p className="text-sm">
              For certain tours you might be required to provide medical information reasonably requested by the
              Tour Operator and may be required to complete the Tour Operator’s medical information form (the “Medical Form”) Golden cloud travel and tour will be requesting.

              Medical Forms are mandatory for certain Tours. If you have any pre-existing medical conditions which may impact their ability to travel, participate in a Tour, travel to remote areas without access to medical facilities or may adversely affect the experience of others on your Tour, you must return a Medical Form, signed by a licensed and practicing physician to the Tour Operator prior to or at the time of final payment for the applicable booking.

              You agree to complete the Medical Form honestly and to disclose all relevant medical information accurately and fully. The Tour Operator will maintain the information in accordance with the Tour Operator’s Privacy Policy.

              The Tour Operator reserves the right to request further information or professional medical opinions where necessary, as determined in its discretion, for your safety or the safe operation of a Tour.

              The Tour Operator reserves the right to deny you permission to travel or participate in any aspect of a Tour at any time and at your own risk and expense where the Tour Operator determines that your physical or mental condition renders you unfit for travel or you represent a danger to yourself or others.

              Pregnancy is considered a medical condition and must be disclosed to the Tour Operator at the time of booking. The Tour Operator may refuse to carry pregnant women over 24 weeks. The Tour Operator may refuse to carry anyone with certain medical conditions if reasonable accommodation or alternatives cannot be arranged.

              In the event that you do not complete the required Medical Form or provide medical information reasonably required by the Tour Operator for any reason by the deadline indicated above, the Tour Operator reserves the right to cancel your booking and all applicable cancellation fees will apply.

              You are responsible for assessing whether a Tour is suitable for you. You should consult your physician to confirm your fitness for travel and participation in any planned activities. You should seek your physician’s advice on vaccinations and medical precautions. The Tour Operator does not provide medical advice. It is your responsibility to assess the risks and requirements of each aspect of the Tour based on your own unique circumstances, limitations, fitness level and medical requirements.

              Travel with the Tour Operator may involve visiting remote or developing regions, where medical care may not be easily accessible and medical facilities may not meet the standards of those found in your home country. The condition of medical facilities in the countries you may visit on your Tour varies and the Tour Operator makes no representations and gives no warranties in relation to the availability or standard of medical facilities in those regions.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">4. SPECIAL REQUIREMENTS</h2>
            <p className="text-sm">
              Any special requirements must be disclosed to the Tour Operator at the time of booking. The Tour Operator will use reasonable efforts to accommodate special requirements or requests but this is not always possible given the nature of the destinations visited and availability of options outside a planned itinerary. Certain activities may be inaccessible to you if your mobility is limited in any way. All food allergies and dietary restrictions must be disclosed to the Tour Operator at the time of booking but the Tour Operator cannot guarantee that dietary needs or restrictions can be accommodated. Any special requests or requirements do not form part of these Terms or the contract between you and the Tour Operator and the Tour Operator is not liable for any failure to accommodate or fulfill such requests.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">5. AGE REQUIREMENTS</h2>
            <p className="text-sm">
              Anyone under the age of 18 on the date of first travel is considered to be a minor. Minors must always be accompanied by an adult. One adult may accompany up to two minors.

              All bookings with a minor are subject to review and approval by the Tour Operator. If the consent of a parent, guardian or any other person is required by applicable law for any minor to travel, the accompanying adult is responsible for securing all consents, documentation and ensuring that they and the minor(s) meet all legal requirements to travel, to enter into and depart from applicable countries and regions. The Tour Operator will not be responsible for any fees, damages, or losses incurred as a result of any failure to secure necessary consents, permits, and approvals.

              Each adult on a booking with a minor or minor(s) is jointly and severally responsible for the behavior, wellbeing, supervision and monitoring of such minor(s), and jointly and severally accepts these Terms for and on behalf of any minor(s) on their booking, including all assumptions of risk and limitations of liability. The Tour Operator does not provide care services for minors and expressly disclaims any responsibility for chaperoning or controlling any minor(s).

            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">6. MANDATORY INSURANCE REQUIREMENTS YOU
              MUST HAVE TRAVEL INSURANCE WITH A MINIMUM MEDICAL, EVACUATION AND REPATRIATION COVERAGE</h2>
            <p className="text-sm">
              covering all applicable dates of travel with the Tour Operator. This insurance must cover personal injury and emergency medical expenses.

              You are strongly recommended to extend your coverage to include cancellation, curtailment, and all other expenses that may arise as a result of loss, damage, injury, delay or inconvenience while traveling. You acknowledge that insurance coverage is not included in the cost of any Tour offered by the Tour Operator and you are required to obtain separate coverage at an additional cost. It is your responsibility to ensure that you have sufficient coverage and comply with the terms of the applicable insurance plans. You are responsible for advising your insurer of the type of travel, destination(s) and activities included in your booking so that the insurer may provide appropriate coverage.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">7. PRICES, SURCHARGES AND TAXES</h2>
            <p className="text-sm">
              The published price of the Tour and any products or services offered by the Tour Operator is subject to change at any time, before or after booking confirmation, up to 2 weeks before departure. Tours are priced and advertised exclusive of applicable sales taxes. After a confirmation invoice has been issued by the Tour Operator, the Tour Operator reserves the right to impose surcharges on any products or services booked for reasons arising from increases in transportation costs, fuel costs, dues, taxes or fees chargeable for services such as landing taxes or embarkation or disembarkation fees at ports and airport charges, local operator costs, currency and exchange fluctuations, increases in taxes, or government action which impacts the price of the applicable products or services; provided however, the Tour Operator will only do so where the increase in question is greater than 5% of the original price paid for the products or services (excluding add-ons, insurance, and taxes). Upon learning of the necessity to impose a surcharge in accordance with this section the Tour Operator will provide notice to you as soon as reasonably possible.

              Where the increase in price is greater than 7% of the original price of the applicable products or services (excluding add-ons, insurance and taxes), you may choose to either:

              (a) cancel the applicable booking without incurring any penalty; or

              (b) accept the change of price.

              You must notify the Tour Operator of your choice within 14 days of receipt of notice of the increase or you will be deemed to have accepted the price change and will be liable for payment of the increase.

              From time-to-time the Tour Operator may offer reduced pricing on certain products or services. Reduced pricing applies only to new bookings. Bookings where payment of at least a deposit has been received by the Tour Operator are not entitled to reduced pricing.

            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">8. VALIDITY</h2>
            <p className="text-sm">
              All dates, itineraries and prices of Tours are subject to change at any time and the current price will be quoted and confirmed at the time of booking, subject to any surcharges that may be levied in accordance these Terms.

              You acknowledge that you are responsible for keeping up to date on the specific details of your Tour and any other products or services, including, but not limited to checking the Tour Operator’s website at least 72 hours prior to departure as minor changes may have been made after the time of booking.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">9. DEPOSITS</h2>
            <p className="text-sm">
              At the time of booking, a non-refundable deposit of 50% of the tour cost per person per Tour is due to the Tour Operator. If the booking is made 3 weeks or less prior to departure, full payment is due at the time of booking. The non-refundable deposit should be sent to the Tour Operator or authorized agent, as applicable.

              Certain products or services the Tour Operator may require you to provide a higher deposit of make full payment at the time of booking. The Tour Operator will advise you of any such requirements prior to confirmation of the applicable booking.

              Note: If you cancel your booking, and that cancellation is not a result of nonpayment or any other breach of these Terms, the deposit will be refunded.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">10. DETAILS REQUIRED FOR BOOKING</h2>
            <p className="text-sm">
              As a condition of booking, you must provide the information requested by the Tour Operator along with final payment. If you fail to provide all required information prior to the date on which full payment is due, an administrative fee will be charged for any costs incurred by the Tour Operator as a result of your failure to provide the required information. If you fail to supply information required by the Tour Operator for air tickets, permits, or other inclusions, you will also be liable for any costs, fees or losses including failure to obtain or provide that inclusion. In the event that you fail to supply information required by the Tour Operator, the Tour Operator also reserves the right to treat your booking (or the relevant component of your booking) as cancelled and levy any cancellation fees deemed reasonable by the Tour Operator, in its sole discretion. The information required by the Tour Operator will vary by Tour and will be communicated to you or to the Tour Operator’s authorized agent during the booking process. The Tour Operator will not be held responsible for any fees you incur as a result of errors, omissions, inaccuracies, late, misplaced or otherwise incomplete information you have provided.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">11. AIRFARE</h2>
            <p className="text-sm">
              Tour prices do not include international or other airfare unless expressly mentioned in the Tour’s
              descriptions. The Tour Operator will quote the best price available for the travel dates requested at
              the time the quote is prepared. Quotes provide an estimate only and are not a firm price commitment by the Tour Operator or the applicable air carrier(s). The Tour Operator acts only as a sales agent for the applicable air carrier and the air carrier terms and conditions apply to the purchase and use of the air travel ticket. Please consult the air carrier’s applicable terms and conditions and conditions of carriage for complete information including applicable cancellation terms. The Tour Operator is not responsible for changes in air itineraries or flight times and does not provide advice or alerts regarding air travel tickets, flight status or delays.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">12. FINAL PAYMENT & ACCEPTANCE OF BOOKING</h2>
            <p className="text-sm">
              The confirmation sent by the Tour Operator or your travel agent will contain details of final payment required for any booking.

              Payment of the balance of the price for any products or services booked and custom-tailored products or services is due 30 days before the departure date of the first product or service included in the applicable booking. If full payment is not received by the applicable due date, the Tour Operator may, at its sole discretion, change the rate payable for the booking, or treat the booking as cancelled and retain the deposit paid on booking as a cancellation fee. If a booking is made less than 3 weeks before the departure date of the first product included in the applicable booking, then the full amount must be paid at the time of booking. If, for any product or service booked, payment terms differ from those outlined in this section, the applicable terms will be communicated to you prior to booking and will also be detailed on the applicable invoice.

              The Tour Operator is not responsible for any charges levied by third parties or financial institutions and payable by you as a result of credit card or other payment transactions and will not refund or return any fees charged by third parties or financial institutions in connection with payments made by you to the Tour Operator.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">13. CANCELLATION BY THE PARTICIPANT</h2>
            <p className="text-sm">
              You may cancel your booking by notifying the Tour Operator. Cancellation fees, if any, will be determined with reference to the date on which notice of cancellation is received by the Tour Operator and are expressed as a percentage of the total price paid for the cancelled Tour, product or service (excluding any insurance products).

              Cancellation of a Tour:

              (a) Cancellation received 60 days or more before departure of first product or service in relevant booking: 200 USD (deposit) will be held by the Tour Operator in accordance with these Terms, the remainder of the payments made to the Tour Operator in respect of the cancelled product will be refunded.

              (b) Cancellation received 59-30 days before departure of first product or service in relevant booking: 200 USD (deposit) applies in addition to an amount equal to 50% of the remainder of the payments made to the Tour Operator in respect of the cancelled Tour will be refunded.

              (c) Cancellation less than 30 days before departure of first product or service in relevant booking: 200 USD (deposit) will be held by the Tour Operator in accordance with these Terms, and no further refund will be payable.

              For certain products of services the Tour Operator the payment policy will change according to the suppliers’ guidelines: the Tour Operator will advise you of any such requirements prior to confirmation of the applicable booking.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">14. GUARANTEED DEPARTURES & CANCELLATION OF A TOUR BY THE TOUR OPERATOR</h2>
            <p className="text-sm">
              A departure date for a Tour offered by the Tour Operator will become a guaranteed departure when at least one booking secured by a valid deposit has been made on that departure.

              The Tour Operator guarantees that all scheduled Tour departures booked and secured with a valid deposit will depart as indicated on the applicable confirmation, subject to reasonably itinerary changes as described in these Terms or good faith health and safety concerns. This guarantee is not applicable in the case of Force Majeure. Up to date Tour and itinerary information is available on the Tour Operator’s website or by contacting the Tour Operator. Brochures and other printed materials displaying Tour information and departure dates are subject to change may not be relied upon for purposes of this guarantee.

              If a Tour is cancelled by the Tour Operator before the date of departure for reasons other than Force Majeure and the cancellation is not caused by your fault or negligence, you will have the choice of accepting from the Tour Operator:

              (a) a substitute Tour of equivalent or superior value; or

              (b) a substitute Tour of lesser value if no Tour of equivalent or superior value is reasonably available and to recover from the Tour Operator the difference in price between the price of the Tour originally purchased and the substitute Tour; or

              (c) a full refund for the cancelled Tour.

              The Tour Operator is not responsible for any incidental expenses or consequential losses that you incur as a result of the cancelled booking including visas, vaccinations, non-refundable flights or rail, nonrefundable car parking or other  fees, loss of earnings, or loss of enjoyment, the Tour Operator reserves the right to issue a full refund in lieu of the choices above, in its sole discretion. Where a significant element of a Tour as described cannot be provided after departure, the Tour Operator will make suitable alternative arrangements where possible. If it is not possible to provide a suitable alternative or if you reasonably reject any suitable alternatives, the Tour Operator may provide you with a refund for unused products or services as determined in its discretion.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">15. TRAVEL DOCUMENTS</h2>
            <p className="text-sm">
              It is your responsibility to obtain information and to have in your possession all the required documentation and identification required for entry, departure and travel to each country or region. This includes a valid passport and all travel documents required by the relevant governmental authorities including all visas, permits and certificates (including but not limited to vaccination or medical certificates) and insurance policies. You must have a passport that is valid 6 months after the last date of travel with the Tour Operator as set out on your itinerary. You accept full responsibility for obtaining all such documents, visas and permits prior to the start of the Tour, and you are solely responsible for the full amount of costs incurred as a result of missing or defective documentation. You agree that you are responsible for the full amount of any loss or expense incurred by the Tour Operator that is a direct result of your failure to secure or be in possession of proper travel documentation. The Tour Operator does not provide advice on travel documents and makes no representations or warrantees as to the accuracy or completeness of any information provided on visas, vaccinations, climate, clothing, baggage, or special equipment and you agree that the Tour Operator is not responsible for any errors or omissions in this information.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">16. FLEXIBILITY & UNUSED SERVICES</h2>
            <p className="text-sm">
              You acknowledge that the nature of travelling in Africa requires flexibility and acknowledges that you will permit reasonable alterations to products, services or itineraries by the Tour Operator. The route, schedules, accommodations, activities, amenities and mode of transportation are subject to change without notice due to unforeseeable circumstances or events outside the control of the Tour Operator (including but not limited to Force Majeure, illness, mechanical breakdown, flight cancellations, strikes, political events and entry or border difficulties). No reimbursements, discounts or refunds will be issued for services that are missed or unused after departure due to no fault of the Tour Operator, including your removal from a Tour because of your negligence or breach of these Terms.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">17. CHANGES</h2>
            <p className="text-sm">
              Changes made by the Tour Operator: The Tour Operator may modify your itinerary where reasonably required in its sole discretion. If the Tour Operator makes a change affecting at least one in three full days of the itinerary or which materially affects the character of a product or service in its entirety (a “Material Change”), the Tour Operator will provide notice to you as soon as reasonably possible, provided that there is sufficient time to do so before departure. If a Material Change is made more than 14 days before departure, you may choose to:

              i) accept the Material Change and proceed with the amended product or service;

              ii) book another product or service of equal or greater value, if available (you will be responsible for paying any difference in price); or

              iii) book another product or service of lesser value, if available (with a refund payable to you for the difference in price); or

              iv) cancel the amended product or service and receive a full refund for the land-only portion of the applicable product or service (a refund is not available for other products or services booked which are not subject to a Material Change).

              You must notify the Tour Operator of your choice within 7 days of receiving notice or you will be deemed to accept the amended itinerary.

              Once a Tour has departed, itinerary changes may be necessary as a result of unforeseen circumstances, operational concerns, or concerns for your health, safety, enjoyment or comfort. Any changes are at the discretion of the Tour Operator. You acknowledge that you must have reasonable financial resources to cover incidental expenses during all travel with the Tour Operator, whether or not such expenses arise from a change of itinerary, and the Tour Operator is not liable for your failure to prepare adequately for travel and unforeseen circumstances which may arise during travel. The Tour Operator will not be liable for any indirect and or consequential losses associated with any changes to a booking or itinerary.

              Changes made by you: You are responsible for ensuring that information provided to the Tour Operator is accurate and up-to-date. Any changes to your name on any booking are subject to the Tour Operator’s approval. Any changes to a booking depend on availability and are subject to the Tour Operator’s approval and these Terms. Any extra costs incurred for making the change will be charged to you along with an administrative fee. Cancellation of any Tour, product or service included in a booking will not be considered a change for purposes of this section and will be governed by the applicable cancellation terms. No changes are permitted to any booking within 10 days of departure of the first product or service on the applicable booking.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">18. ACCEPTANCE OF RISK</h2>
            <p className="text-sm">
              You acknowledge that in the case of adventures travels, the products and services offered by the Tour Operator may involve a significant amount of risk to your health and safety. By traveling with the Tour Operator you acknowledge that you have considered any potential risks to health and safety. You hereby assume responsibility for all such risk and releases the Tour Operator from all claims and causes of action arising from any losses, damages or injuries or death resulting from risks inherent in travel, including adventure travel specifically, visiting foreign destinations, and participating in adventurous activities or otherwise offered by the Tour Operator.

              You acknowledge that the degree and nature of personal risk involved depends on the products or services booked and the location(s) in which a product or service operates, and that there may be a significant degree of personal risk involved in participating, particularly participating in physical activities, travel to remote locations, carriage by watercraft, participation in “extreme sports” or other high-risk activities, or travel to countries with developing infrastructure. Standards of hygiene, accommodation and transport in certain countries where Tours take place are often lower than the standards you may reasonably expect in your home country or region. You agree that the Tour Operator is not responsible for providing information or guidance with respect to local customs, weather conditions, specific safety concerns, physical challenges or laws in effect in any locations where a Tour, product or service is operated. You acknowledge you have considered the potential risks, dangers and challenges and your own personal capabilities and needs, and you expressly assume the risks associated with travel under such conditions.

              You must at all times strictly comply with all applicable laws and regulations of all countries and regions. Should you fail to comply with the above or commit any illegal act when on Tour or, if in the opinion of the Tour Operator (acting reasonably), your behavior is causing or is likely to cause danger, distress or material annoyance to others, the Tour Operator may terminate your travel arrangements on any product or service immediately at your expense and without any liability on the Tour Operator’s part. You will not be entitled to any refund for unused or missed services or costs incurred as a result of termination of your travel arrangements, including, without limitation, return travel, accommodations, meals, and incidentals.

              You are responsible for any costs (including repair, replacement and cleaning fees) incurred by the Tour Operator or the Tour Operator’s suppliers for property damage, destruction or theft caused by you while on a Tour. You agree to immediately report any pre-existing damage to a representative of the Tour Operator and staff of the accommodation, transportation service, or facility as soon as possible upon discovery. You agree to take all prudent measures in relation to your own safety while on Tour including, but not limited to, the proper use of safety devices (including seatbelts, harnesses, flotation devices and helmets) and obeying all posted signs and oral or written warnings regarding health and safety. Neither the Tour Operator nor its Third Party Suppliers (as defined herein) are liable for loss or damages caused by your failure to comply with safety instructions or warnings.

              You agree to bring any complaints to the Tour Operator as soon as possible in order to provide the Tour Operator with the opportunity to properly address such complaint. You agree to inform your tour leader, another representative of the Tour Operator or the Tour Operator’s customer service department directly. The Tour Operator assumes no liability for complaints that are not properly brought to the attention of the Tour Operator and cannot resolve or attempt to resolve complaints until proper notice is provided.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">19. THE TOUR OPERATOR IS NOT LIABLE FOR THIRD PARTY SUPPLIERS</h2>
            <p className="text-sm">
              The Tour Operator makes arrangements with accommodation providers, activity providers, airlines, cruise lines, coach companies, transfer operators, shore excursion operators, tour and local guides, and other independent parties (“Third Party Suppliers”) to provide you with some or all of the components of your booking. Third Party Suppliers may also engage the services of local operators and sub-contractors. Although the Tour Operator takes all reasonable care in selecting Third Party Suppliers, the Tour Operator is unable to control Third Party Suppliers, does not supervise Third Party Suppliers and therefore cannot be responsible for their acts or omissions. Any services provided by Third Party Suppliers are subject to the terms and conditions imposed by these Third Party Suppliers and their liability is limited by their tariffs, conditions of carriage, tickets and vouchers and international conventions and agreements that govern the provision of their services. These may limit or exclude liability of the Third Party Supplier. You acknowledge that Third Party Suppliers operate in compliance with the applicable laws of the countries in which they operate and the Tour Operator does not warrant that any Third Party Supplier is in compliance with the laws of your country of residence or any other jurisdiction.

              THE TOUR OPERATOR IS NOT LIABLE AND WILL NOT ASSUME RESPONSIBILITY FOR ANY CLAIMS, LOSSES, DAMAGES, COSTS OR EXPENSES ARISING OUT OF INCONVENIENCE, LOSS OF ENJOYMENT, UPSET, DISAPPOINTMENT, DISTRESS OR FRUSTRATION, WHETHER PHYSICAL OR MENTAL, RESULTING FROM THE ACT OR OMISSION OF ANY PARTY OTHER THAN THE TOUR OPERATOR AND ITS EMPLOYEES.

              The Tour Operator is not liable for the acts or omissions, whether negligent or otherwise, of Third Party Suppliers or any independent contractors.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">20. OPTIONAL EXTRAS</h2>
            <p className="text-sm">
              “Optional Extras” refers to any activity, transportation, meal, product or service not expressly included in the Tour itinerary or price of the Tour and do not form part of the Tour. You agree that any assistance given by the Tour Operator’s representative(s) in arranging, selecting, or booking, any Optional Extras is purely at your request and the Tour Operator makes no warranties and expressly disclaims any liability whatsoever arising from participation in Optional Extras or any information provided by any representative of the Tour Operator regarding any Optional Extras. You release the Tour Operator from all claims and causes of action arising from any damages, loss of enjoyment, inconvenience, or injuries related to or arising from participation in or booking of Optional Extras.

              You acknowledge and agree that any liability for loss, damages, death, personal injury, illness, emotional distress, mental suffering or psychological injury or loss of or damage to property associated with Optional Extras is the sole responsibility of the third party providing that service or activity.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">21. LIABILITY</h2>
            <p className="text-sm">
              The Tour Operator and its parents, subsidiaries and their respective employees, affiliates, officers, directors, successors, representatives, and assigns shall not be held liable for (A) any damage to, or loss of, property or injury to, or death of, persons occasioned directly or indirectly by an act or omission of any other provider, including but not limited to any defect in any aircraft, watercraft, or vehicle operated or provided by such other provider; and (B) any loss or damage due to delay, cancellation, or disruption in any manner caused by the laws, regulations, acts or failures to act, demands, orders, or interpositions of any government or any subdivision or agent thereof, or by acts of God, strikes, fire, flood, war, rebellion, terrorism, insurrection, sickness, quarantine, epidemics, theft, or any other cause(s) beyond their control. You waive any claim against the Tour Operator for any such loss, damage, injury, or death.

              In the event that any loss, death, injury or illness is caused by the negligent acts or omissions of the Tour Operator or of the Third Party Suppliers of any services which form part of the booking contract then the Tour Operator limits its liability, where applicable by all applicable international conventions.

              Notwithstanding anything to the contrary elsewhere in these Terms, the Tour Operator will not in any circumstances be liable to you for any loss or anticipated loss of profit, loss of enjoyment, loss of revenue, loss of use, loss of contract or other opportunity nor for any other consequential or indirect loss or damage of a similar nature.

              For claims not involving personal injury, death or illness any liability the Tour Operator may incur for the negligent acts or omissions of its suppliers will be limited to a maximum of the price which you paid for the applicable Tour, not including insurance premiums and administration charges. The Tour Operator will not at any time be liable for any loss of or damage to valuables of any nature. You agree that you will be precluded from making a double recovery by making the same claims and seeking recovery against the Tour Operator and its suppliers, contractors or other third parties.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">22. FORCE MAJEURE</h2>
            <p className="text-sm">
              The Tour Operator will not be liable in any way for death, bodily injury, illness, damage, delay or other loss or detriment to person or property, or financial costs both direct and indirect incurred, or for the Tour Operator failure to commence, perform or complete any duty owed to you if such death, delay, bodily injury (including emotional distress or injury), illness, damage or other loss or detriment to person or property is caused by Act of God, war or war like operations, mechanical breakdowns, terrorist activities or threat thereof, civil commotions, labor difficulties, interference by authorities, political disturbance, howsoever and where so ever any of the same may arise or be caused, riot, insurrection and government restraint, fire, extreme weather or any other cause whatsoever beyond the reasonable control of the Tour Operator; or an event which the Tour Operator or the Third Party Supplier of services, even with all due care, could not foresee any and all of which, individually and collectively, constitute “Force Majeure”.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">23. IMAGES AND MARKETING</h2>
            <p className="text-sm">
              You agree that, while participating in any Tour, images, photos or videos may be taken by other participants, the Tour Operator or its representatives that may contain or feature you. You consent to any such pictures being taken and grants a perpetual, royalty-free, worldwide, irrevocable license to the Tour Operator, its contractors, sub-contractors and assigns, to reproduce for any purpose whatsoever (including marketing, promotions and the creation of promotional materials by or with sub-licensees), in any medium whatsoever, whether currently known or hereinafter devised, without any further obligation or compensation payable to you.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">24. PRIVACY POLICY</h2>
            <p className="text-sm">
              The Tour Operator must collect your personal information to deliver the Tour and any products or services booked. The Tour Operator collects, uses and discloses only that information reasonably required to enable the Tour Operator and its Third Party Suppliers to provide the particular Tour, products and/or services that you have requested.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">25. APPLICABLE LAW</h2>
            <p className="text-sm">
              The Contract and these Terms are subject to the laws of the Republic ofGHANA and you submit to the exclusive jurisdiction of the courts located in GHANA for the resolution of any dispute under these Terms or concerning any Tour, product or service.
            </p>
          </li>
          <br/>
          <li>
            <h2 className="text-primarycolor underline text-sm ">26. AMENDMENTS</h2>
            <p className="text-sm">
              The Tour Operator reserves the right to update or alter these Terms at any time, and will post the amended Terms on the Tour Operator’s website. Any amendment will take effect 10 days after being posted to the Tour Operator’s website. An up to date copy of these Terms, as amended, may be accessed at any time on the Tour Operator’s website and will be sent to you upon written request to the Tour Operator. You are deemed to have accepted any amendments to these Terms on the date that is 10 days after their posting on the Tour Operator’s website. The Tour Operator recommends that you refer to the Terms prior to travel to familiarize themselves with the most up-to-date version available.
            </p>
          </li>
        </ol>
      </Modal>



      <div className="packages-title text-center md:text-left lg:text-left">
        <h2 className="font-extrabold uppercase text-xl lg:text-3xl">
          About Us
        </h2>
      </div>
      <div className="lg:flex md:flex-wrap lg:justify-between md:flex md:justify-between block mt-6">
        <div
            className="h-ch1 lg:h-67 md:h-67 z-0 w-full lg:pr-10 relative mb-6 lg:mb-0 lg:w-p5 md:w-full"
            style={{
              minHeight: '500px'
            }}
        >
          <div className="content w-full text-justify pt-2 h-p4 lg:h-full">
            <h2 className="text-sm md:text-base lg:text-lg font-bold md:mb-1 text-primarycolor">
              Learn More About Us
            </h2>
            <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light capitalize text-left">
              We are a small, experienced dedicated team who simply love sport and travel.
              Our staff have visited the majority of the destinations we offer and have first-hand experience.
            </p>
            <br />
              <h4 className="text-primarycolor font-bold \ ">Why should you book with us?</h4>
              <ul className="list-disc text-xs lg:text-xs xl:text-sm md:text-xs font-light capitalize text-left ml-5">
                <li>You'll get professional and personal service from experienced staff who can send you tour options,
                  help with ideas if you haven't decided where to go yet and put your unique tour together.
                </li>
                <li>
                  We can help you get the most out of your tour - we really know our destinations and have visited
                  the vast majority of them on top of which they are thoroughly researched too.
                </li>
                <li>We offer you the best value tour possible.  Try us and see for yourself.
                </li>
                <li>
                  When you book with us you have access to all your tour details from when you book.
                </li>
                <li>
                  We'll send you an information on your itinerary and you'll be notified you each time there's an update.
                </li>
                <li>
                  The small things are important to us.
                </li>
                <li>
                  We offer you, the tour leader a FREE place (unless you ask us not to) because we know and really
                  appreciate the work you put in – without dedicated coaches, teams couldn't enjoy amazing touring
                  experiences.
                </li>
              </ul>
            <button
                onClick={() => openModal()}
                className="text-white bg-primarycolor uppercase opacity-75 outline-none mt-4 py-3 px-4"
                style={{ borderRadius: "1rem" }}
            >
              Terms and Conditions
            </button>
          </div>
        </div>
        <div
          className="h-ch1 lg:h-67 md:h-67 z-0 w-full flex justify-center items-center relative mb-6 lg:mb-0 lg:w-p5 md:w-full"
          style={{
            minHeight: '530px'
          }}
        >
          <img
              src={siteLogg}
              alt="logo of golden travel and tours"
              className="w-67 h-67"
          />
        </div>
      </div>
    </section>
  );
}
