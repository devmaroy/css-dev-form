import { Form } from "@/components/form/Form";
import { Layout } from "@/components/layout/Layout";
import { Accordion } from "@/components/ui/Accordion";
import { Panel } from "@/components/ui/Panel";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Title } from "@/components/ui/Title";
import { faqItems, tipsItems } from "@/data";

export const App = () => {
  return (
    <Layout>
      <div className="py-10 container flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/4 xl:sticky xl:top-6 xl:self-start xl:h-fit order-1">
          <Panel tag="aside">
            <div className="space-y-4">
              <Title icon="table-of-contents">Table of Contents</Title>
              <TableOfContents />
            </div>
          </Panel>
        </div>

        <div className="order-3 xl:order-2 w-full xl:w-1/2">
          <Panel tag="section">
            <Form />
          </Panel>
        </div>

        <div className="order-2 xl:order-3 w-full xl:w-1/4 space-y-6 md:space-y-0 md:flex md:flex-row md:gap-4 xl:flex-col xl:gap-0 xl:space-y-8">
          <Panel tag="aside" className="md:w-1/2 xl:w-full">
            <div className="space-y-4">
              <Title icon="circle-help">FAQ</Title>
              <Accordion items={faqItems} />
            </div>
          </Panel>
          <Panel tag="aside" className="md:w-1/2 xl:w-full">
            <div className="space-y-4">
              <Title icon="info">Tips & Instructions</Title>
              <Accordion items={tipsItems} />
            </div>
          </Panel>
        </div>
      </div>
    </Layout>
  );
};
