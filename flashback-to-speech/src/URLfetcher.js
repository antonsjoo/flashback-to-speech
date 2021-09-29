import React from "react";

class URLfetcher extends React.Component {
  state = {
    URL: "",
  };

  setValue = (fieldName) => (evt) =>
    this.setState({ [fieldName]: evt.target.value });

  render() {
    const { url } = this.state;
    return (
      <div className="pt-30">
        <form className="bg-white shadow-md rounded px-10 pt- pb-8 mb-10 max-w-md mx-auto sm:max-w-xl">
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="url"
            >
              Flashback URL here:
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="url"
              id="url"
              onChange={this.setValue("url")}
              value={url}
              placeholder="URL"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default URLfetcher;
