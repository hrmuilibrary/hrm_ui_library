import{j as e}from"./jsx-runtime-jvqcDqZy.js";import{r as i}from"./iframe-B_zgtzDa.js";import{M as C,N as I}from"./NestedMenu-jcRSOyJV.js";import{B as b}from"./Button-DufHvJb9.js";import{I as y}from"./IconArrowDownloadFilled-CXkSvE27.js";import{I as g,a as h,b as x}from"./IconBeach-BZfEOCRA.js";import{I as M}from"./IconMore-OWO_CFOZ.js";import{I as O}from"./IconCheckmark-DmAewHoT.js";import{I as n}from"./IconSettings-b18-ZNkh.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DfdEBBFt.js";import"./index-D0EPLcYk.js";import"./Text-Bx6CJsp0.js";import"./helpers-DhlGc6X_.js";import"./index-AboGxAif.js";import"./types-c8iQqNoH.js";import"./index-C_Oao2cn.js";import"./Popover-DgoG2FSA.js";import"./IconDismiss-DCq767p3.js";import"./Link-BCFg0Pii.js";import"./CollapseGroup-DPUFQJVG.js";import"./Divider-V75lJ8r-.js";import"./AnimatePresenceWrapper-Bq6prjSL.js";import"./IconChevronDown-BDCvQIYR.js";import"./IconChevronUp-e3E9fK36.js";import"./IconChevronRight-Vt3kaAO1.js";import"./AvatarGroup-Dc3vZws6.js";import"./DropzoneFileUpload-WLmH_9zw.js";import"./Label-CR8YcQWh.js";import"./useFormProps-DoNhw9-j.js";import"./ErrorMessage-du3SKR53.js";import"./IconDynamicComponent-nEWCBlK_.js";import"./Snackbar-CkCghYxh.js";import"./Alert-CkIgC-CU.js";import"./IconDismissFilled-BmOKUT74.js";import"./Progress-CyWruvhb.js";import"./IconAdd-DF0Nu-xN.js";import"./Checkbox-DiwYPT6X.js";import"./IconInfo-dmMgprtB.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
