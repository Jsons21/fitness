import useMutation from "../api/useMutation";

export default function Form() {
  const { mutate: add, error } = useMutation("POST", "/activities", [
    "activities",
  ]);
  const postActivities = async (FormData) => {
    const obj = {
      name: FormData.get("name"),
      description: FormData.get("description"),
    };
    await add(obj);
  };
  return (
    <form action={postActivities}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {error && <output>{error}</output>}
    </form>
  );
}
