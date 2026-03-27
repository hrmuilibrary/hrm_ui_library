import{j as e}from"./jsx-runtime-Dj-BslX1.js";import{r as i}from"./iframe-Cc0kHBcs.js";import{M as C,N as I}from"./NestedMenu-CaPaunDd.js";import{B as b}from"./Button-B3vD51jM.js";import{I as y}from"./IconArrowDownloadFilled-donZRPN8.js";import{I as g,a as h,b as x}from"./IconBeach-D_CexAKH.js";import{I as M}from"./IconMore-DyAoYiEp.js";import{I as O}from"./IconCheckmark-BYxpgKlX.js";import{I as n}from"./IconSettings-DdTPh1kw.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DB5V84MR.js";import"./index-BiAu9z22.js";import"./Text-m5mYE0qu.js";import"./helpers-TH7TMLZl.js";import"./index-AboGxAif.js";import"./types-5wgYVn0V.js";import"./Popover-BJgNbXNW.js";import"./IconDismiss-DAvmxODn.js";import"./Link-CTYmCRHl.js";import"./index-CzuPt2aR.js";import"./CollapseGroup-C2ZV0oBm.js";import"./Divider-MDtxuPa_.js";import"./AnimatePresenceWrapper-DfepXTET.js";import"./IconChevronDown-DQf1zmL6.js";import"./IconChevronUp-CQuRBHGh.js";import"./IconChevronRight-BuJR09Pb.js";import"./AvatarGroup-DOaBAy_y.js";import"./DropzoneFileUpload-tpDQfmzN.js";import"./Label-Cr3EK_fT.js";import"./useFormProps-DNgHwinO.js";import"./ErrorMessage-TEr27Lz7.js";import"./IconDynamicComponent-B8mtxnd4.js";import"./Snackbar-Bw24onpL.js";import"./Alert-DnUlEh7a.js";import"./IconDismissFilled-DBtZwLaB.js";import"./Progress-CKc5R63h.js";import"./IconAdd-C-2y0Oc-.js";import"./Checkbox-DbDp_-6a.js";import"./IconInfo-pOOMjslD.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
