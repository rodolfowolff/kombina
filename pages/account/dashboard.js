import { parseCookies } from "@/helpers/index";

import Layout from "@/components/Layout";
import DashboardEvents from "@/components/DashboardEvents";

import { API_URL } from "@/config/index";

import styles from "@/styles/Dashboard.module.css";

export default function DashboardPage({ events }) {
  const deleteEvent = () => {

  };

  return (
    <Layout title='User dashboard'>
      <div className={ styles.dash }>
        <h1>Dashboard</h1>
        <h3>My events</h3>

        { events.map((evt) => (
          <DashboardEvents key={ evt.id } evt={ evt } handleDelete={ deleteEvent } />
        )) }
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const events = await res.json();

  return {
    props: { events },
  };
}
