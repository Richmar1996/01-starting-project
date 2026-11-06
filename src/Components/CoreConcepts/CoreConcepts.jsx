import './CoreConcept.css';
import { CORE_CONCEPTS } from "../../assets/data";
import Section from "../Section";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Time to get started">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept
            key={conceptItem.title}
            {...conceptItem}
          />
        ))}
      </ul>
    </Section>
  );
}