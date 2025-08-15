import useMutation from "../api/useMutation";

export default function ActivityItem({ activity, canDelete }) {
  const {
    mutate: deleteActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${activity.id}`, ["activities"]);

  return (
    <li>
      <p>{activity.name}</p> 
      {canDelete && (
        <button
          onClick={() => deleteActivity()}
          disabled={deleting}
          style={{ marginLeft: 8 }}
        >
          {deleting ? "Deleting…" : "Delete"}
        </button>
      )}
      {deleteError && (
        <span>{deleteError}</span>
      )}
    </li>
  );
}
