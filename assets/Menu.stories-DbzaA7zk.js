import{j as e}from"./jsx-runtime-0kNS9Jws.js";import{r as i}from"./iframe-s9_6tLSy.js";import{M as C,N as I}from"./NestedMenu-BytqOu9Y.js";import{B as b}from"./Button-CaK8eNhk.js";import{I as y}from"./IconArrowDownloadFilled-CacR0InY.js";import{I as g,a as h,b as x}from"./IconBeach-D5Kt4agu.js";import{I as M}from"./IconMore-DTWl5dcR.js";import{I as O}from"./IconCheckmark-B4GvBG-5.js";import{I as n}from"./IconSettings-s__KjzT8.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-ChZDZUfQ.js";import"./index-DQ0oY7V7.js";import"./Text-BEWV9w1W.js";import"./helpers-DtgE-dps.js";import"./index-AboGxAif.js";import"./types-C8uUUCvy.js";import"./index-DjjxkGhf.js";import"./Popover-Dwxz_IfO.js";import"./IconDismiss-BzUYgj_f.js";import"./Link-MaCy-3O0.js";import"./CollapseGroup-Czj3Q0Tw.js";import"./Divider-DQvY2Qw_.js";import"./AnimatePresenceWrapper-DGXEYeqf.js";import"./IconChevronDown-E7lLkEBk.js";import"./IconChevronUp-CFjZSywY.js";import"./IconChevronRight-CsqK3RbO.js";import"./AvatarGroup-YRb4zLAM.js";import"./DropzoneFileUpload-XSD2cL2_.js";import"./Label-1u1IJmy6.js";import"./useFormProps-Bs9w2H3r.js";import"./ErrorMessage-CyWaRtDE.js";import"./IconDynamicComponent-DCWISmBl.js";import"./Snackbar-ZisKq-vn.js";import"./Alert-CA9oHKPO.js";import"./IconDismissFilled-BOIW3_mC.js";import"./Progress-C6XE_tPx.js";import"./IconAdd-PIR0O0m2.js";import"./Checkbox-DLQmrabL.js";import"./IconInfo-DbvCGNEQ.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
