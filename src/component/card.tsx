import { EllipsisOutlined } from "@ant-design/icons";
import type { ProColumns } from "@ant-design/pro-components";
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from "@ant-design/pro-components";
import { Button } from "antd";

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ["付小小", "曲丽丽", "林东东", "陈帅帅", "兼某某"];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: "AppName",
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
   title: "Application Name",
    dataIndex: "name",
    render: (_) => <a>{_}</a>,
  },
  {
    title: "Container Quantity",
    dataIndex: "containers",
    align: "right",
    sorter: (a, b) => a.containers - b.containers,
  },
  {
   title: "Creator",
    dataIndex: "creator",
    valueType: "select",
    valueEnum: {
      all: { text: "All" },
      付小小: { text: "Fu Xiaoxiao" },
      曲丽丽: { text: "Qu Lili" },
      林东东: { text: "Lin Dongdong" },
      陈帅帅: { text: "Chen Shuaishuai" },
      兼某某: { text: "Jian Moumou" },
    },
  },
  {
   title: "Operation",
    key: "option",
    width: 120,
    valueType: "option",
    render: () => [
      <a key="link">Link</a>,
      <a key="warn">Warning</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];

export default function Card() {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // Form search items will be passed from params to the backend interface.
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="Response Date" />
          </LightFilter>
        ),
        actions: [
          <Button
            key="primary"
            type="primary"
            onClick={() => {
              alert("add");
            }}
          >
         Add
          </Button>,
        ],
      }}
      rowKey="key"
      search={false}
    />
  );
}
