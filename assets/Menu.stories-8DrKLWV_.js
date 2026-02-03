import{j as e}from"./jsx-runtime-CO_4fShW.js";import{r as i}from"./iframe-DQqQBVxO.js";import{M as C,N as I}from"./NestedMenu-C5N3EAip.js";import{B as b}from"./Button-CBwOmmgy.js";import{I as y}from"./IconArrowDownloadFilled-DbS12w5O.js";import{I as g,a as h,b as x}from"./IconBeach-j65_koVH.js";import{I as M}from"./IconMore-vVHICPgL.js";import{I as O}from"./IconCheckmark-czMrzLoA.js";import{I as n}from"./IconSettings-NrQqoE4F.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Cp0tUxh0.js";import"./index-BjDT6sgC.js";import"./Text-CkXkE3Bq.js";import"./helpers-uRsMBXJT.js";import"./index-DYDl_GcV.js";import"./types-DyQXMykX.js";import"./ModalConfirmation-BYxEjt5v.js";import"./AnimatePresenceWrapper-D5w8xp_Y.js";import"./IconDismiss-BU3cpEAw.js";import"./index-PL4QBPBs.js";import"./CollapseGroup-CJLfiaIw.js";import"./Divider-0NcU6yKy.js";import"./IconChevronDown-BViw0ilR.js";import"./IconChevronUp-CZBbMLEm.js";import"./IconChevronRight-BcD8MtLG.js";import"./AvatarGroup-CnCZJN6W.js";import"./DropzoneFileUpload-Bw7rWbpK.js";import"./Label-B-YUXvnx.js";import"./useFormProps-DTRhIMFF.js";import"./ErrorMessage-DTromK9_.js";import"./IconDynamicComponent-B891EqQ-.js";import"./IconDelete-DAQsBGEt.js";import"./Snackbar-BTksZek3.js";import"./Alert-DBM7MFLM.js";import"./IconDismissFilled-DDxMLFha.js";import"./Progress-B_qsCfA8.js";import"./IconAdd-BWyqCr-_.js";import"./Checkbox-DSIsx_lt.js";import"./Popover-4LHSdqRd.js";import"./Link-bEJsmf9L.js";import"./IconInfo-t4HqX6jR.js";const Ce={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const be=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,be as __namedExportsOrder,Ce as default};
