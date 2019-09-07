import React from "react";
import MPItem from "./mp-item";

const MeettingPlanner = () => {
  return (
    <div className="meeting-container">
      <div className="meeting-wrapper">
        <div className="title-wrapper">
          <div className="meeting-planner-title">Meeting Planner</div>
          <div className="meeting-sub-title">
            Once you confirm Eric Aroca your people will take a unique ride of a
            life changing truth that living the life they have imagined is
            within their reach.
          </div>
        </div>
        <div className="items-wrapper">
          <MPItem
            title={"Contract Details:"}
            content={
              "Upon confirming Eric for your event, we will send you a contract complete with presentation detail. Please review, sign and return to us for signature. We will email the countersigned contract."
            }
          />
          <MPItem
            title={"Platform Preference:"}
            content={
              "Eric is ok with most room set-ups, but suggests not having a center isle and for groups of 100 or more we request a raised platform. Please do not over seat the room."
            }
          />
          <MPItem
            title={"Travel Arrangements: "}
            content={
              "Our office will make Eric’s travel arrangements at least three weeks prior to your event date and will forward his itinerary to you. You are responsible for securing his hotel on your master account. Eric prefers to stay at Marriott with a non-smoking room."
            }
          />
          <MPItem
            title={"Ground Transportation:"}
            content={
              "Please advise if you need Eric to take a taxi, shuttle or rent a car."
            }
          />
          <MPItem
            title={"Payment:"}
            content={
              "A deposit of half the amount of the honorarium is due upon confirmation. The remaining half of the honorarium is due on the day of the event. We will provide you with a w9 upon confirmation."
            }
          />
          <MPItem
            title={"Audio/Video:"}
            content={
              "Recording of Eric’s presentation, in whole or part, without prior contractual agreement, is not allowed."
            }
          />
          <MPItem
            title={"Follow Up:"}
            content={
              "We will contact you following your event to get your feedback and discuss Eric’s NEXT presentation!"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MeettingPlanner;
