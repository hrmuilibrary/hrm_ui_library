import{j as e}from"./jsx-runtime-CujgrDDU.js";import{r as i}from"./iframe--mYIEbPD.js";import{M as C,N as I}from"./NestedMenu-CwVxWZsm.js";import{B as b}from"./Button-ZtiB0PpV.js";import{I as y}from"./IconArrowDownloadFilled-2hsf1jki.js";import{I as g,a as h,b as x}from"./IconBeach-CYLg40n1.js";import{I as M}from"./IconMore-Cz0ayERV.js";import{I as O}from"./IconCheckmark-NRXYfHM3.js";import{I as n}from"./IconSettings-C1k5z2Ho.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Df1X9mb-.js";import"./index-DvmWzZgk.js";import"./Text-BlsFxIWf.js";import"./helpers-BUA6hngY.js";import"./index-AboGxAif.js";import"./types-CPW0FzzB.js";import"./index-CnXVRqMq.js";import"./Popover-GO1u087r.js";import"./IconDismiss-BEwo7qK2.js";import"./Link-h667A7q8.js";import"./CollapseGroup-CW35_kXH.js";import"./Divider-I7bdrS0c.js";import"./AnimatePresenceWrapper-CWwnMpzO.js";import"./IconChevronDown-C_-Tb943.js";import"./IconChevronUp-VJ4dpuxO.js";import"./IconChevronRight-C59cI28s.js";import"./AvatarGroup-C-q8BvFs.js";import"./DropzoneFileUpload-CWavgX_E.js";import"./Label-B5j2dTY9.js";import"./useFormProps-DEJfLM8a.js";import"./ErrorMessage-CnrQqthn.js";import"./IconDynamicComponent-B_fy4vdi.js";import"./Snackbar-CdAOisD9.js";import"./Alert-DLR8xzkb.js";import"./IconDismissFilled--kh0GTTf.js";import"./Progress-Bl_stm_D.js";import"./IconAdd-I3vU5-4C.js";import"./Checkbox-Do1XnpjM.js";import"./IconInfo-DrZaj1rP.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
