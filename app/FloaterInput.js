import React from "react";

function FloaterInput(props) {
  const { setIsLoading, handleSubmit, setSearch, loading } = props;
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center bg-gray-200/30 p-5 rounded-[25px] backdrop-blur-sm">
          <input
            placeholder="Enter Zip Code..."
            type="text"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {loading && (
            <button disabled className="btn ml-5">
              <span className="loading loading-dots"></span>
            </button>
          )}
          {!loading && (
            <button
              onClick={() => {
                setIsLoading(true);
                handleSubmit();
              }}
              className="btn ml-5"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default FloaterInput;
