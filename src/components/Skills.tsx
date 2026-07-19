const skills = [
  "Java",
  "Vert.x",
  "gRPC",
  "Microservices",
  "Payment Systems",
  "Redis",
  "Maven",
  "Bazel",
  "Docker",
  "GitLab CI/CD",
  "Feature Flags (Unleash)",
  "REST API",
  "Fintech",
  "Direct Debit Integration",
  "Fraud Detection",
];

const Skills = () => {
  return (
    <section className="px-5 py-32" id="skills">
      <div className="container mx-auto md:w-[70%] text-center">
        <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border-2 border-indigo-600 text-sm md:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
