import{j as e}from"./jsx-runtime-swoB_UH8.js";import{r as i}from"./iframe-BOVbyeQX.js";import{M as C,N as I}from"./NestedMenu-UW1Ofh-5.js";import{B as b}from"./Button-BCCG1XEW.js";import{I as y}from"./IconArrowDownloadFilled-N6F6isR7.js";import{I as g,a as h,b as x}from"./IconBeach-jRTY9Tyt.js";import{I as M}from"./IconMore-CVT2isps.js";import{I as O}from"./IconCheckmark-BDJ3lJJX.js";import{I as n}from"./IconSettings-HKUCjG0V.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BjbarA9B.js";import"./index-K21i-UZe.js";import"./Text-U13ArU1Z.js";import"./helpers-DcbC4fGe.js";import"./index-DYDl_GcV.js";import"./types-B3Y0s562.js";import"./Popover-DRkxLNYE.js";import"./IconDismiss-CgiDmL-0.js";import"./Link-BRJ6ho3v.js";import"./index-C0B3Z3o6.js";import"./CollapseGroup-_cQMh868.js";import"./Divider-D7t9z2FE.js";import"./AnimatePresenceWrapper-BFI5Sd3N.js";import"./IconChevronDown-CYGX1xHv.js";import"./IconChevronUp-D76sI7qu.js";import"./IconChevronRight-BAhcSiiz.js";import"./AvatarGroup-DjNEK8XY.js";import"./DropzoneFileUpload-CcDEQCgz.js";import"./Label-D9k15P0o.js";import"./useFormProps-Cc3_xUcI.js";import"./ErrorMessage-DVspfZNK.js";import"./IconDynamicComponent-BUEqk-Pm.js";import"./Snackbar-swfV1gsh.js";import"./Alert-BRFt722J.js";import"./IconDismissFilled-g1IEcdrX.js";import"./Progress-DM79Gc_n.js";import"./IconAdd-C6MsMlee.js";import"./Checkbox-BNvKnt3q.js";import"./IconInfo-B3BJiYU3.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
