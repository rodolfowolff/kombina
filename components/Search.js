import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Search.module.css";

export default function Search() {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm('');
  };

  return (
    <div className={ styles.search }>
      <form onSubmit={ handleSubmit }>
        <div class="search p2">
          <input
            type="text"
            aria-label="search"
            class="px2 py1"
            placeholder="🔍 Search"
            value={ term }
            onChange={ (e) => setTerm(e.target.value) }
          />
        </div>
      </form>
    </div>
  );
}
