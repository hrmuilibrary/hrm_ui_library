import{j as e}from"./jsx-runtime-DGMf18uz.js";import{r as i}from"./iframe-BxopgcHD.js";import{M as C,N as I}from"./NestedMenu-4oinRs4m.js";import{B as b}from"./Button-DJarkLY9.js";import{I as y}from"./IconArrowDownloadFilled-Chj9ffsN.js";import{I as g,a as h,b as x}from"./IconBeach-BRhPD8Iz.js";import{I as M}from"./IconMore-BaqM8ImT.js";import{I as O}from"./IconCheckmark-8G9Q_WZT.js";import{I as n}from"./IconSettings-DbcvDCBa.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-biwhggso.js";import"./index-C94UHohc.js";import"./Text-B63QT2DE.js";import"./helpers-Cn4U8KyO.js";import"./index-AboGxAif.js";import"./types-CUwOA7Bz.js";import"./index-OTSHAAMO.js";import"./Popover-Dxvpno7X.js";import"./IconDismiss-RGNOT7sG.js";import"./Link-Bj09wT3J.js";import"./CollapseGroup-TGnB0HSO.js";import"./Divider-CQypTrJo.js";import"./AnimatePresenceWrapper-CYqC1oSh.js";import"./IconChevronDown-C_ctPCOt.js";import"./IconChevronUp-DhPDj_0j.js";import"./IconChevronRight-Dzj-EODh.js";import"./AvatarGroup-DnKpfxN9.js";import"./DropzoneFileUpload-6n0w3_1G.js";import"./Label-C9pOCRih.js";import"./useFormProps-CVT6vkyp.js";import"./ErrorMessage-DkeSaz6t.js";import"./IconDynamicComponent-2ySArwvD.js";import"./Snackbar-DquC-mXq.js";import"./Alert-wtElZ0k-.js";import"./IconDismissFilled-D8btn9_u.js";import"./Progress-D8s2OEQo.js";import"./IconAdd-DCpW2p5-.js";import"./Checkbox-C0-sFEZs.js";import"./IconInfo-Be7EEdQ-.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
