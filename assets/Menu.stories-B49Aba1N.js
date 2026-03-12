import{j as e}from"./jsx-runtime-M9SCQKd1.js";import{r as i}from"./iframe-DxQ_GNvi.js";import{M as C,N as I}from"./NestedMenu-DZm6EzZ2.js";import{B as b}from"./Button-B8GbDSGJ.js";import{I as y}from"./IconArrowDownloadFilled-Dex-Q3Wu.js";import{I as g,a as h,b as x}from"./IconBeach-BusBkc5b.js";import{I as M}from"./IconMore-CiA8_9I7.js";import{I as O}from"./IconCheckmark-D46hWG-4.js";import{I as n}from"./IconSettings-DXLdUvIn.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DorJPNsM.js";import"./index-BCyEUiR_.js";import"./Text-N65zDgGZ.js";import"./helpers-BOhIF9Bp.js";import"./index-DYDl_GcV.js";import"./types-CChFf3K-.js";import"./Popover-CxZgal92.js";import"./IconDismiss-Gl927t0h.js";import"./Link-CaMJQT5f.js";import"./index-XtymV3RJ.js";import"./CollapseGroup-fRwGIP83.js";import"./Divider-DmqR1Ouc.js";import"./AnimatePresenceWrapper-rw2bAKfE.js";import"./IconChevronDown-B98fF1pB.js";import"./IconChevronUp-CHgjJTd8.js";import"./IconChevronRight-DlUNSAh2.js";import"./AvatarGroup-C0WnZz4t.js";import"./DropzoneFileUpload-DB-WWyYZ.js";import"./Label-bh3Y9-zx.js";import"./useFormProps-acl2opNp.js";import"./ErrorMessage-5Yc8nroX.js";import"./IconDynamicComponent-C3Z7Ne9Z.js";import"./Snackbar-SziTCRqL.js";import"./Alert-DLa4jPrE.js";import"./IconDismissFilled-YaqITttM.js";import"./Progress-DPPZp3sS.js";import"./IconAdd-DpwtC_5X.js";import"./Checkbox-raq-EPO5.js";import"./IconInfo-91AnncH-.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
