import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import Form from "./ActivitiesForm";
import ActivityItem from "./ActivitiesItems";

export default function ActivitiesPage() {
  const { token } = useAuth();
  const isLoggedIn = !!token;
  const { data, loading, error } = useQuery("/activities", "activities");

  if (loading) return <p>Loading Activities...</p>;
  if (error) return <p>{error}</p>;

  const activities = Array.isArray(data) ? data : [];

  return (
    <>
      <h1>Activities</h1>
      {!isLoggedIn && <p>Log in to add or delete activities.</p>}
      {isLoggedIn && <p>Welcome back! You can add/delete below.</p>}
      <p>Imagine all the activities!</p>
      <ul>
        {activities.map((a, index) => (
          <ActivityItem key={index} activity={a} canDelete={isLoggedIn} />
        ))}
      </ul>
      {isLoggedIn && <Form />}
    </>
  );
}
