import Column from '@/components/flex/column';
import Row from '@/components/flex/row';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Row>
        <Column lg={3} md={6} sm={8}>
          <div className="bg-primary-500">Test</div>
        </Column>
        <Column lg={3} md={6} sm={8}>
          <div className="bg-primary-500">Test</div>
        </Column>
        <Column lg={3} md={6} sm={8}>
          <div className="bg-primary-500">Test</div>
        </Column>
        <Column lg={3} md={6} sm={8}>
          <div className="bg-primary-500">Test</div>
        </Column>
        <Column lg={6} md={6} sm={8}>
          <div className="bg-primary-500">Test</div>
        </Column>
        <Column lg={8} md={6} sm={8}>
          <div className="bg-primary-500">Test</div>
        </Column>
      </Row>
    </main>
  );
}
