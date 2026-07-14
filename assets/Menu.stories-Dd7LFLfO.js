import{j as e}from"./jsx-runtime-CVR_gjst.js";import{r as i}from"./iframe-Cz47NnCw.js";import{M as C,N as I}from"./NestedMenu-CB_sS3eu.js";import{B as b}from"./Button-CDXXyKIE.js";import{I as y}from"./IconArrowDownloadFilled-BrfSZ6L0.js";import{I as g,a as h,b as x}from"./IconBeach-DdajLXiR.js";import{I as M}from"./IconMore-BXObzpK-.js";import{I as O}from"./IconCheckmark-C4rmsJZ1.js";import{I as n}from"./IconSettings-DsyGZC8O.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DqBdJGKa.js";import"./index-D7DBw789.js";import"./Text-G_RZLOGM.js";import"./helpers-d-VT9Uo5.js";import"./index-AboGxAif.js";import"./types-01LlMfXP.js";import"./index-D0T0OhI4.js";import"./Popover-DEU-KrgQ.js";import"./IconDismiss-g5DFGKXn.js";import"./Link-Bt42gc7s.js";import"./CollapseGroup-CaJxWJd_.js";import"./Divider-BtUPobkn.js";import"./AnimatePresenceWrapper-f89gfeJ2.js";import"./IconChevronDown-C2EHZD32.js";import"./IconChevronUp-CXc3EncW.js";import"./IconChevronRight-DDzwcxbT.js";import"./AvatarGroup-BDGIW8_G.js";import"./DropzoneFileUpload-D8eqr0LS.js";import"./Label-CwqV23Sh.js";import"./useFormProps-B82Tn6RQ.js";import"./ErrorMessage-CoLuO0CR.js";import"./IconDynamicComponent-D-Z5j4h5.js";import"./Snackbar-CB--4BC2.js";import"./Alert-BkFnm4rD.js";import"./IconDismissFilled-BzH1zkoP.js";import"./Progress-DkFNTlwi.js";import"./IconAdd-CdS2hnGs.js";import"./Checkbox-DMqZQk6J.js";import"./IconInfo-CCwgFO02.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
