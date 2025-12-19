import Link from "next/link";

const DeveloperCard = ({ developer }) => {
  const { name, designation, company, experience, skills, story } = developer;

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{designation}</p>
      </div>

      {/* Company & Experience */}
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <span>🏢 {company}</span>
        <span>⏳ {experience}</span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Story */}
      <p className="text-gray-700 text-sm leading-relaxed">{story}</p>

      {/* Button */}
      <Link href={`/stories/${developer.id}`}>
        <button className=" mt-3 w-full bg-sky-500 hover:bg-sky-600 text-white py-4 px-2 rounded-xl font-semibold transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default DeveloperCard;
