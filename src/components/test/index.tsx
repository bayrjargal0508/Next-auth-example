"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MyAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>2. Is it accessible?</AccordionTrigger>
        <AccordionContent>
         2.  Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordion;
