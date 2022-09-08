import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Dreamix</h1>
      <div>Check out some <Link to="/node/article">Articles</Link> to get started!</div>
    </div>
  );
}
