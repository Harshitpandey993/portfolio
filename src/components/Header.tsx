import Link from 'next/link';
import { Group, Button } from '@mantine/core';

export default function Header() {
  return (
    <header style={{ padding: '1rem 6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>Logo</div>
      <Group gap="md">
        <Link href="/">
          <Button variant="subtle">Home</Button>
        </Link>
        <Link href="/projects">
          <Button variant="subtle">Projects</Button>
        </Link>
        <Link href="/about">
          <Button variant="subtle">About</Button>
        </Link>
      </Group>
    </header>
  );
}
