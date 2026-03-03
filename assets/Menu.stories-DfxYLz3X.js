import{j as e}from"./jsx-runtime-jFMHOQiv.js";import{r as i}from"./iframe-j8d_chXW.js";import{M as C,N as I}from"./NestedMenu-Cg2GXbIk.js";import{B as b}from"./Button-DkgGcymV.js";import{I as y}from"./IconArrowDownloadFilled-C1C5_cv8.js";import{I as g,a as h,b as x}from"./IconBeach-DV6XVoGb.js";import{I as M}from"./IconMore-Bs9T0kyR.js";import{I as O}from"./IconCheckmark-CoFzokoV.js";import{I as n}from"./IconSettings-gFhxRBLd.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-C9QnFbVr.js";import"./index-Bh-szKX2.js";import"./Text-cBKcNHHC.js";import"./helpers-B82z9bby.js";import"./index-DYDl_GcV.js";import"./types-fk_rOSif.js";import"./Popover-CDF5JkKU.js";import"./IconDismiss-Byffu1qp.js";import"./Link-CLXx25Wc.js";import"./index-BQq4c5CU.js";import"./CollapseGroup-9FFaTXPN.js";import"./Divider-DuX9IKMH.js";import"./AnimatePresenceWrapper-R_5tjcUF.js";import"./IconChevronDown-BKIixDfX.js";import"./IconChevronUp-DVvmdbc3.js";import"./IconChevronRight-DzohKb1-.js";import"./AvatarGroup-CC00O41r.js";import"./DropzoneFileUpload-B6W6aq20.js";import"./Label-DpPEgIh3.js";import"./useFormProps-B3EqgvBJ.js";import"./ErrorMessage-4WejSJjb.js";import"./IconDynamicComponent-jW9BCE90.js";import"./Snackbar-PpAtHS9f.js";import"./Alert-BCGUxK7g.js";import"./IconDismissFilled-BrBQht9m.js";import"./Progress-DI2n3cdn.js";import"./IconAdd-DlZXXra7.js";import"./Checkbox-DMlcil5K.js";import"./IconInfo-d3aYeuy5.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
