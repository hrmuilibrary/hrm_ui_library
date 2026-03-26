import{j as e}from"./jsx-runtime-De1W4Ev6.js";import{r as i}from"./iframe-CJE6mlSt.js";import{M as C,N as I}from"./NestedMenu-DIvXusC1.js";import{B as b}from"./Button-BgFf7xij.js";import{I as y}from"./IconArrowDownloadFilled-BAqGI4ab.js";import{I as g,a as h,b as x}from"./IconBeach-SfZqCFng.js";import{I as M}from"./IconMore-DZ3mqbP1.js";import{I as O}from"./IconCheckmark-CrcI9Uas.js";import{I as n}from"./IconSettings-COllMb-v.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BOqjdarL.js";import"./index-aZAEwRrk.js";import"./Text-946_MTyk.js";import"./helpers-CpGN0e-i.js";import"./index-AboGxAif.js";import"./types-Depnuowl.js";import"./Popover-DUnqrT6c.js";import"./IconDismiss-CEzd0GTy.js";import"./Link-BI2_PKY6.js";import"./index-m_oK3uhi.js";import"./CollapseGroup-C3HnrRPy.js";import"./Divider-BRwUNRH1.js";import"./AnimatePresenceWrapper-BMK4gXtO.js";import"./IconChevronDown-DdqzgZHo.js";import"./IconChevronUp-BOlICrZI.js";import"./IconChevronRight-CtIOMClN.js";import"./AvatarGroup-C0fIAnEL.js";import"./DropzoneFileUpload-BC8WYv0M.js";import"./Label-Bp9VT2jS.js";import"./useFormProps-CSvv9Slv.js";import"./ErrorMessage-BMLrnVeY.js";import"./IconDynamicComponent-NLcgcrMF.js";import"./Snackbar-DYEsE6x_.js";import"./Alert-DL4HZ91L.js";import"./IconDismissFilled-K1N0ol6b.js";import"./Progress-09pWlf0X.js";import"./IconAdd-DpG2pH_0.js";import"./Checkbox-C1mD2VgA.js";import"./IconInfo-DYdY39l3.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
