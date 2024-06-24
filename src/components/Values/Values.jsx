import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Values.css";
import data from '../../utils/accordion'

const Values = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better!
          </span>


          <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]} //0 index position
          >
            {
              data.map((item, i)=> { //each accodion item by index

                const {className, setClassName} = useState(null);

                return (
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>    
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordionButton flexCenter">
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20}/>
                        </div>
                      </AccordionItemButton>    
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                      {/* Content inside dropDown */}
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }

          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Values;
