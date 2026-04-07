import{j as e}from"./jsx-runtime-DQocG_DU.js";import{r as i}from"./iframe-DohMLMgT.js";import{M as C,N as I}from"./NestedMenu-B0jpvjLY.js";import{B as b}from"./Button-C0wGFX0-.js";import{I as y}from"./IconArrowDownloadFilled-Daz2itSR.js";import{I as g,a as h,b as x}from"./IconBeach-C_OjC6N6.js";import{I as M}from"./IconMore-Cj6U1U7k.js";import{I as O}from"./IconCheckmark-eDgW_kNd.js";import{I as n}from"./IconSettings-BJTrZPki.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-pT-JJzcU.js";import"./index-BXVFLrhS.js";import"./Text-B2QS4csO.js";import"./helpers-VjGXHpiu.js";import"./index-AboGxAif.js";import"./types-Ce_Xqsqm.js";import"./Popover-BOKh1Cug.js";import"./IconDismiss-CkGysSVs.js";import"./Link-BFvLYgpp.js";import"./index-By7FAOXe.js";import"./CollapseGroup-CYJYxx48.js";import"./Divider-DVdon9_d.js";import"./AnimatePresenceWrapper-DLtmSEp9.js";import"./IconChevronDown-DM2PYpqZ.js";import"./IconChevronUp-C7tSwshN.js";import"./IconChevronRight-DBA2J4AM.js";import"./AvatarGroup-CqRmaeK_.js";import"./DropzoneFileUpload-DByyHKsw.js";import"./Label-rZElN5VB.js";import"./useFormProps-B1OsadL3.js";import"./ErrorMessage-B81hUD6v.js";import"./IconDynamicComponent-wZoyePAq.js";import"./Snackbar-BrW_yJos.js";import"./Alert-BiFdZqxO.js";import"./IconDismissFilled-CdzHgjB3.js";import"./Progress-B0r2-7Ve.js";import"./IconAdd-NJQfnun1.js";import"./Checkbox-D_qd3ipe.js";import"./IconInfo-Ceg1OpA7.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
