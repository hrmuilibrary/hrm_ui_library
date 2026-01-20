import{j as e,c as v,T as K}from"./Text-BCy2auDT.js";import{r as f}from"./iframe-DbuX508q.js";import"./DropzoneFileUpload-CwB8h4Ko.js";import{L as I,O as _,Q as k,U as N,V}from"./UnderConstruction-yQIFCI6E.js";import{B as h}from"./types-B_RHM9mB.js";import"./ButtonGroup-oSe1aLcB.js";import{C as w}from"./Chips-bt-0p-g_.js";import{a as H,b as E}from"./IconInfo-D2MfdYuB.js";import{a as D}from"./IconChevronDoubleRight-BJ7fJSHq.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDismissCircleFilled-C_WNxUpC.js";import"./index-CaVCUHbj.js";const U=[{user:"Luke Skywalker",age:21,id:"fffffffsdf",visits:[7,8,9],progress:"fdfsdfsdfsd",status:"Active",enableSelection:!1},...Array(3).fill({user:"John Doe",age:30,id:"disabledId",visits:[4,5,6],progress:"divv",status:"Active",enableSelection:!0}),...Array(5).fill({user:"John Doe",age:30,id:"sdfsf",visits:[4,5,6],progress:"divv",status:"Active"}),{user:"John Doe",age:30,id:"dsfsdf",visits:[4,5,6],progress:"divv",status:"Active"},{user:"Bruce wayne",id:"fffffffeeeee",age:29,visits:[1,2,3],progress:"diff",status:"Active"}],B=o=>{const[r,u]=f.useState(!1),[g,p]=f.useState(U),l=[{Header:"User",accessor:"user",fixed:"left",widthInPercent:30,width:100},{Header:"Status",accessor:"status",widthInPercent:20},{accessor:"age",Header:"Age",widthInPercent:20,minWidth:100,columnProps:{sortable:!0}},{Header:"Profile Progress",accessor:"progress",widthInPercent:20},{Header:"Visits",widthInPercent:10,accessor:"visits",fixed:"right"}],s=n=>{console.log(n)};return e.jsx(I,{...o,data:g,onChange:s,columns:l,submitButtons:[{buttonText:"Approve all",isLoading:r,onClick:function(n,t,i){console.log(t),i&&i()}},{buttonText:"Decline all",isLoading:r,onClick:function(n,t,i){console.log(t),i&&i()}}]})},Z={title:"Table",component:I},c=B.bind({});c.args={fixedHeader:{y:500},withSelect:!0,data:[],columns:[],language:"en"};c.argTypes={language:{options:["en","ru","hy"],control:{type:"select"}}};const S=[{user:"USER",age:21,id:"fffffffsdf",visits:[7,8,9],progress:"fdfsdfsdfsd",status:"Active",subRows:[{user:"User 1",age:21,id:"sub1",visits:[1,2,3],progress:"Sub Progress 1",status:"Active"},{user:"User 2",age:22,id:"sub2",visits:[4,5,6],progress:"Sub Progress 2",status:"Inactive"}]},{user:"Bruce Wayne",id:"fffffffeeeee",age:29,visits:[1,2,3],progress:"diff",status:"Active",subRows:[{user:"User 3",age:29,id:"sub3",visits:[7,8,9],progress:"Sub Progress 3",status:"Active"}]},{user:"John Doe",age:30,id:"dsfsdf",visits:[4,5,6],progress:"divv",status:"Active"},{user:"Jane Smith",age:25,id:"jane123",visits:[2,3,4],progress:"progress1",status:"Inactive",subRows:[{user:"User 4",age:25,id:"sub4",visits:[5,6,7],progress:"Sub Progress 4",status:"Active"},{user:"User 5",age:26,id:"sub5",visits:[8,9,10],progress:"Sub Progress 5",status:"Inactive"}]},...Array(30).fill({user:"Regular User",age:30,id:"regular",visits:[4,5,6],progress:"regular",status:"Active"})],L=o=>{const[r,u]=f.useState({}),g=(s,n)=>{u(t=>({...t,[s]:n}))},p=s=>{Object.entries(s).forEach(([n,t])=>{const i=S.find(a=>a.id===n);if(i!=null&&i.subRows){const a={...r};i.subRows.forEach(b=>{t?a[b.id]=!0:delete a[b.id]}),u(a)}})},l=[{id:"user",header:"User",accessorKey:"user",enablePinning:!1,enableSorting:!1,cell:({getValue:s})=>e.jsx(K,{weight:"bolder",children:`${s()}`})},{header:"Status",id:"status",accessorKey:"status",cell:s=>e.jsx(w,{text:"Created",type:"accent",color:"information"})},{id:"age",accessorKey:"age",header:"Age",size:50},{header:"Profile Progress",id:"progress",accessorKey:"progress"},{header:"Test 1",id:"test_1",accessorKey:"visits"},{header:"Test 2",id:"test_2",accessorKey:"visits"},{header:"Test 3",id:"test_3",accessorKey:"visits"},{header:"Test 4",id:"test_4",accessorKey:"visits"},{header:"Test 5",id:"test_5",accessorKey:"visits",enableHiding:!1},{header:"Visits",id:"visits",accessorKey:"visits"},{header:"Actions",id:"actions",accessorKey:"actions",size:30,cell:()=>e.jsxs("div",{className:"flexbox align-items--center",children:[e.jsx(h,{className:"mr-8",iconProps:{Component:D},type:"secondary"}),e.jsx(h,{className:"mr-8",iconProps:{Component:H},type:"secondary"}),e.jsx(h,{iconProps:{Component:E},type:"secondary"})]})}];return e.jsx("div",{style:{height:"95vh"},children:e.jsx(_,{...o,data:S,totalCount:100,tableSettings:{tableName:"TableV2",persistColumnSettings:"localStorage"},columns:l,emptyTitle:"Empty title",emptySubTitle:"Please try to reload the page or use another keyword.",renderHeader:s=>e.jsx("div",{className:"advanced-table__header justify-content--end",children:e.jsx(V,{hiddenColumns:["user"],tooltipText:"Column is disabled",table:s})}),renderFooter:s=>e.jsx("div",{className:"advanced-table__footer",children:e.jsx(N,{table:s,totalCount:1e3})}),renderExpandedContent:s=>{const n=s.getIsSelected();return e.jsx("div",{className:"advanced-table__expanded-content",children:e.jsx("table",{style:{width:"100%"},children:e.jsx("tbody",{children:(s.original.subRows||[]).map((t,i)=>e.jsxs("tr",{className:v({selected:n||r[t.id]}),children:[o.withSelect&&e.jsx(e.Fragment,{children:e.jsx("td",{className:"with-checkbox",children:e.jsx(k,{checked:n||r[t.id]||!1,onChange:a=>{n||g(t.id,a.target.checked)},indeterminate:!1,disabled:n})})}),l.map((a,b)=>{if(a.id==="actions"||a.id==="select")return null;const m=s.getVisibleCells().find(j=>j.column.id===a.id);if(!m)return null;const A="accessorKey"in a?a.accessorKey:a.id;return e.jsx("td",{className:v({"pinned-cell":m.column.getIsPinned(),selected:n||r[t.id]}),style:{width:m.column.getSize()},children:a.id==="status"?e.jsx(w,{text:t.status,type:"accent",color:t.status==="Active"?"information":"warning"}):t[A]},a.id)})]},t.id||i))})})})},onRowSelection:p})})},d=L.bind({});d.args={isActionsVisible:!0,isLoading:!1,onSortChange:o=>console.log(o),onRowSelection:o=>console.log(o),onPaginationChange:o=>console.log(o),onRowClick:o=>console.log(o)};d.parameters={docs:{description:{story:"TableV2 with collapsible rows functionality. Each row can be expanded to show additional content."}}};var y,x,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState(data);
  const columns: TColumn[] = [{
    Header: 'User',
    accessor: 'user',
    fixed: 'left',
    widthInPercent: 30,
    width: 100
  }, {
    Header: 'Status',
    accessor: 'status',
    widthInPercent: 20
  }, {
    accessor: 'age',
    Header: 'Age',
    widthInPercent: 20,
    minWidth: 100,
    columnProps: {
      sortable: true
    }
  }, {
    Header: 'Profile Progress',
    accessor: 'progress',
    widthInPercent: 20
  }, {
    Header: 'Visits',
    widthInPercent: 10,
    accessor: 'visits',
    fixed: 'right'
  }];
  const handleChange = (state: TableState) => {
    console.log(state);
  };
  return <_Table {...args} data={tableData} onChange={handleChange} columns={columns} submitButtons={[{
    buttonText: 'Approve all',
    isLoading,
    onClick: function (event: ReactEventHandler, data: any, callback): void {
      console.log(data);
      callback && callback();
    }
  }, {
    buttonText: 'Decline all',
    isLoading,
    onClick: function (event: ReactEventHandler, data: any, callback): void {
      console.log(data);
      callback && callback();
    }
  }]} />;
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var P,R,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [selectedSubRows, setSelectedSubRows] = useState<Record<string, boolean>>({});
  const handleSubRowSelection = (subRowId: string, checked: boolean) => {
    setSelectedSubRows(prev => ({
      ...prev,
      [subRowId]: checked
    }));
  };
  const handleRowSelection = (state: Record<string, boolean>) => {
    // When a parent row is selected/deselected, update its sub-rows accordingly
    Object.entries(state).forEach(([rowId, isSelected]) => {
      const row = dataV2.find(r => r.id === rowId);
      if (row?.subRows) {
        const newSelectedSubRows = {
          ...selectedSubRows
        };
        row.subRows.forEach((subRow: any) => {
          if (isSelected) {
            newSelectedSubRows[subRow.id] = true;
          } else {
            delete newSelectedSubRows[subRow.id];
          }
        });
        setSelectedSubRows(newSelectedSubRows);
      }
    });
  };
  const columns: ColumnDef<any>[] = [{
    id: 'user',
    header: 'User',
    accessorKey: 'user',
    enablePinning: false,
    enableSorting: false,
    cell: ({
      getValue
    }) => <Text weight="bolder">{\`\${getValue()}\`}</Text>
  }, {
    header: 'Status',
    id: 'status',
    accessorKey: 'status',
    cell: row => <Chips text={'Created'} type={'accent'} color={'information'} />
  }, {
    id: 'age',
    accessorKey: 'age',
    header: 'Age',
    size: 50
  }, {
    header: 'Profile Progress',
    id: 'progress',
    accessorKey: 'progress'
  }, {
    header: 'Test 1',
    id: 'test_1',
    accessorKey: 'visits'
  }, {
    header: 'Test 2',
    id: 'test_2',
    accessorKey: 'visits'
  }, {
    header: 'Test 3',
    id: 'test_3',
    accessorKey: 'visits'
  }, {
    header: 'Test 4',
    id: 'test_4',
    accessorKey: 'visits'
  }, {
    header: 'Test 5',
    id: 'test_5',
    accessorKey: 'visits',
    enableHiding: false
  }, {
    header: 'Visits',
    id: 'visits',
    accessorKey: 'visits'
  }, {
    header: 'Actions',
    id: 'actions',
    accessorKey: 'actions',
    size: 30,
    cell: () => <div className="flexbox align-items--center">
          <Button className="mr-8" iconProps={{
        Component: IconAdd
      }} type="secondary" />
          <Button className="mr-8" iconProps={{
        Component: IconEdit
      }} type="secondary" />
          <Button iconProps={{
        Component: IconDelete
      }} type="secondary" />
        </div>
  }];
  return <div style={{
    height: '95vh'
  }}>
      <_TableV2 {...args} data={dataV2} totalCount={100} tableSettings={{
      tableName: 'TableV2',
      persistColumnSettings: 'localStorage'
    }} columns={columns}
    // defaultHiddenColumns={['user']}
    emptyTitle="Empty title" emptySubTitle="Please try to reload the page or use another keyword." renderHeader={table => <div className="advanced-table__header justify-content--end">
            <ColumnSettings hiddenColumns={['user']} tooltipText="Column is disabled" table={table} />
          </div>} renderFooter={table => <div className="advanced-table__footer">
            <AdvancedPagination table={table} totalCount={1000} />
          </div>} renderExpandedContent={row => {
      const isParentSelected = row.getIsSelected();
      return <div className="advanced-table__expanded-content">
              <table style={{
          width: '100%'
        }}>
                <tbody>
                  {(row.original.subRows || []).map((subRow: any, index: number) => <tr key={subRow.id || index} className={classnames({
              selected: isParentSelected || selectedSubRows[subRow.id]
            })}>
                      {args.withSelect && <>
                          <td className="with-checkbox">
                            <IndeterminateCheckbox checked={isParentSelected || selectedSubRows[subRow.id] || false} onChange={e => {
                    if (!isParentSelected) {
                      handleSubRowSelection(subRow.id, e.target.checked);
                    }
                  }} indeterminate={false} disabled={isParentSelected} />
                          </td>
                        </>}
                      {columns.map((column, colIndex) => {
                if (column.id === 'actions' || column.id === 'select') return null;
                const cell = row.getVisibleCells().find(cell => cell.column.id === column.id);
                if (!cell) return null;
                const accessorKey = 'accessorKey' in column ? column.accessorKey : column.id;
                return <td key={column.id} className={classnames({
                  ['pinned-cell']: cell.column.getIsPinned(),
                  ['selected']: isParentSelected || selectedSubRows[subRow.id]
                })} style={{
                  width: cell.column.getSize()
                }}>
                            {column.id === 'status' ? <Chips text={subRow.status} type={'accent'} color={subRow.status === 'Active' ? 'information' : 'warning'} /> : subRow[accessorKey as string]}
                          </td>;
              })}
                    </tr>)}
                </tbody>
              </table>
            </div>;
    }} onRowSelection={handleRowSelection} />
    </div>;
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const ee=["Table","TableV2"];export{c as Table,d as TableV2,ee as __namedExportsOrder,Z as default};
