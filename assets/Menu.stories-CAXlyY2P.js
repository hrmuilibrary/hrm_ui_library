import{j as e}from"./jsx-runtime-BGdV4lnB.js";import{r as i}from"./iframe-9sKbWilt.js";import{M as C,N as I}from"./NestedMenu-CxVPFey-.js";import{B as b}from"./Button-DH_bd297.js";import{I as y}from"./IconArrowDownloadFilled-tBme3huM.js";import{I as g,a as h,b as x}from"./IconBeach-dPFf3D_i.js";import{I as M}from"./IconMore-DE1NoYt7.js";import{I as O}from"./IconCheckmark-BheMU-fL.js";import{I as n}from"./IconSettings-8_B8d8tx.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CtSk3JAR.js";import"./index-ClloYIFO.js";import"./Text-B87HRLXo.js";import"./helpers-Dref4Ux9.js";import"./index-AboGxAif.js";import"./types-DWYYnZzs.js";import"./index-DRTS29y2.js";import"./Popover-D0qYUwq_.js";import"./IconDismiss-OpC_HWHe.js";import"./Link-CR2x0voN.js";import"./CollapseGroup-BcOSqHtW.js";import"./Divider-BMcaOP2b.js";import"./AnimatePresenceWrapper-DiA0K_py.js";import"./IconChevronDown-B9Ixfv6r.js";import"./IconChevronUp-lEcB5jQK.js";import"./IconChevronRight-C9hO-Esa.js";import"./AvatarGroup-BK4l0qRr.js";import"./DropzoneFileUpload-DcKo0KoG.js";import"./Label-Ci3S1CnF.js";import"./useFormProps-DIMM2c9_.js";import"./ErrorMessage-BuzKSLfv.js";import"./IconDynamicComponent-DTXNlZK2.js";import"./Snackbar-DS1hSjdw.js";import"./Alert-3To5SJjb.js";import"./IconDismissFilled-CXJDOH8I.js";import"./Progress-DJCJBeSl.js";import"./IconAdd-O_WqtytC.js";import"./Checkbox-B47HAKyq.js";import"./IconInfo--CzC5W2H.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
