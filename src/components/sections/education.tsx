import { EDUCATION } from "@/components/constants/data";
import Divider from "@/components/ui/divider";

export default function Education() {
  return (
    <section className="animate-section">
      {/* Education */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">education.</h2>
        <div className="space-y-4">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-medium text-base">{edu.degree}</h3>
                <span className="text-sm text-muted-foreground font-mono">{edu.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
}
