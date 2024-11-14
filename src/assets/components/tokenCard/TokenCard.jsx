/* eslint-disable react/prop-types */

function TokenCard({
  category,
  title,
  description,
  duration,
}) {
  return (
    <div className="token w-80 rounded-2xl p-8 m-0 bg-emerald-400 relative">
      <div className="flex flex-col gap-4">
        {/* Priority Select */}
        <select
          className="absolute top-8 right-4 text-sm font-bold bg-transparent focus:outline-none"
          defaultValue="low"
          style={{
            color: 'gray',
          }}
          onChange={(e) => {
            switch (e.target.value) {
              case 'high':
                e.target.style.color = 'red';
                break;
              case 'moderate':
                e.target.style.color = 'white';
                break;
              case 'low':
                e.target.style.color = 'green';
                break;
              default:
                e.target.style.color = 'gray';
            }
          }}
        >
          <option value="high" style={{ color: 'red' }}>High Priority</option>
          <option value="moderate" style={{ color: 'orange' }}>Moderate Priority</option>
          <option value="low" style={{ color: 'green' }}>Low Priority</option>
        </select>

        <p className="text-gray-500 font-semibold uppercase text-sm mt-0">{category}</p>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>

      <hr className="my-6" />

      <div className="flex flex-col gap-4">
        {/* Duration */}
        <p className="text-md text-black">Duration: <span className="font-bold">{duration}</span></p>

        <div className="flex flex-row gap-4 justify-evenly">
          <button className="px-6 py-2 border border-solid rounded-2xl bg-white">Accept</button>
          <button className="px-6 py-2 rounded-2xl bg-black text-white">Decline</button>
        </div>
      </div>
    </div>
  );
}

TokenCard.defaultProps = {
  category: "Marketing",
  title: "Campaign Access",
  description: "Provides access to the upcoming summer campaign.",
  duration: "7 Days"
};

export default TokenCard;
