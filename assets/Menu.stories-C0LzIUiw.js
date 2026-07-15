import{j as e}from"./jsx-runtime-nuCDw52l.js";import{r as i}from"./iframe-DvaikATC.js";import{M as C,N as I}from"./NestedMenu-DUTRDmC0.js";import{B as b}from"./Button-Dk_C7-v5.js";import{I as y}from"./IconArrowDownloadFilled-n3j8NdV6.js";import{I as g,a as h,b as x}from"./IconBeach-CcmpZ2kN.js";import{I as M}from"./IconMore-Be9IttmC.js";import{I as O}from"./IconCheckmark-DRfUx13r.js";import{I as n}from"./IconSettings-o22S5y5N.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CQLUbc6z.js";import"./index-CXIjQS3l.js";import"./Text-DB5RiTxF.js";import"./helpers-BEm6AbwL.js";import"./index-AboGxAif.js";import"./types-DZkqWelN.js";import"./index-1pWFmpdE.js";import"./Popover-D0Gb-Gaa.js";import"./IconDismiss-Dhj1i8r-.js";import"./Link-BiwV2UJL.js";import"./CollapseGroup-BsxB5aEP.js";import"./Divider-w9W3ieL6.js";import"./AnimatePresenceWrapper-qXYVWP54.js";import"./IconChevronDown-CpPSJmdg.js";import"./IconChevronUp-Clq1YRwF.js";import"./IconChevronRight-DvIuXvGo.js";import"./AvatarGroup-CplLD7GB.js";import"./DropzoneFileUpload-D4yG7v6V.js";import"./Label-C4okipqK.js";import"./useFormProps-CFyMqcT3.js";import"./ErrorMessage-VJ0jEVqV.js";import"./IconDynamicComponent-Cmn2_7yz.js";import"./Snackbar-DcZijcY7.js";import"./Alert-uBbjXEhi.js";import"./IconDismissFilled-WyGuil91.js";import"./Progress-DsHGZK68.js";import"./IconAdd-BtgQ62Gi.js";import"./Checkbox-DNqF5ghX.js";import"./IconInfo-CFnxkYm5.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
