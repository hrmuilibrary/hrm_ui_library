import{j as e}from"./jsx-runtime-D99dQDcf.js";import{r as i}from"./iframe-2EQnDXFg.js";import{M as C,N as I}from"./NestedMenu-CVh4Yngp.js";import{B as b}from"./Button-DwF9doOa.js";import{I as y}from"./IconArrowDownloadFilled-DgOwZQwE.js";import{I as g,a as h,b as x}from"./IconBeach-DzLpgZCV.js";import{I as M}from"./IconMore-C7-wECLD.js";import{I as O}from"./IconCheckmark-CTAkf_Fh.js";import{I as n}from"./IconSettings-DC_lXe1L.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CnZuVk84.js";import"./index-C8LNWSVT.js";import"./Text-CIxaswkQ.js";import"./helpers-C5LKUMWl.js";import"./index-DYDl_GcV.js";import"./types-8FHqnxYX.js";import"./Popover-S4UYQVhS.js";import"./IconDismiss-B2RNAWcW.js";import"./Link-DGS7kU04.js";import"./index-DBAwVZwQ.js";import"./CollapseGroup-wCQzYd5S.js";import"./Divider-FRSYcqow.js";import"./AnimatePresenceWrapper-DoE5mqEO.js";import"./IconChevronDown-CBV8Swws.js";import"./IconChevronUp-BNswpLSl.js";import"./IconChevronRight-Cgq6Flkr.js";import"./AvatarGroup-CYUGgDpP.js";import"./DropzoneFileUpload-DTrql-zc.js";import"./Label-CLSG-YjQ.js";import"./useFormProps-nYPXRkPQ.js";import"./ErrorMessage-Cj2QaVd8.js";import"./IconDynamicComponent-C1kP8PQr.js";import"./Snackbar-LwWHoAjr.js";import"./Alert-r5v2OzJ7.js";import"./IconDismissFilled-BJEbcpna.js";import"./Progress-Dg6thBk1.js";import"./IconAdd-DKeTMG05.js";import"./Checkbox-DCuc4UBS.js";import"./IconInfo-C4YrYY_0.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
