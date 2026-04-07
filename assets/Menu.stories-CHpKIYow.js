import{j as e}from"./jsx-runtime-EcFAuVjI.js";import{r as i}from"./iframe-CTWPIPaL.js";import{M as C,N as I}from"./NestedMenu-sOE9HKxy.js";import{B as b}from"./Button-DiFuwB26.js";import{I as y}from"./IconArrowDownloadFilled-CZiN0ETO.js";import{I as g,a as h,b as x}from"./IconBeach-Kz3KxHCd.js";import{I as M}from"./IconMore-B8mTAVQf.js";import{I as O}from"./IconCheckmark-1fHjwx4M.js";import{I as n}from"./IconSettings-B4v2sDMY.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BIWU1OzT.js";import"./index-BCkTmoWx.js";import"./Text-BHkxZYtK.js";import"./helpers-BYBBF6cx.js";import"./index-AboGxAif.js";import"./types-DJBBpde0.js";import"./Popover-CEBnvk9c.js";import"./IconDismiss-R-ZXLtu8.js";import"./Link-spLkLQz7.js";import"./index-CF6owjSp.js";import"./CollapseGroup-Dkn1uouc.js";import"./Divider-De5gT35a.js";import"./AnimatePresenceWrapper-it-LFf1O.js";import"./IconChevronDown-CQ13yH2_.js";import"./IconChevronUp-CqSo8-Mt.js";import"./IconChevronRight-_vT9yChq.js";import"./AvatarGroup-C145vqdB.js";import"./DropzoneFileUpload-BCvoxoAk.js";import"./Label-CAoGIR2C.js";import"./useFormProps-Te3s3i0r.js";import"./ErrorMessage-DLfVzrjG.js";import"./IconDynamicComponent-CBtEbrN8.js";import"./Snackbar-DKxfiGIT.js";import"./Alert-DZcV-LCL.js";import"./IconDismissFilled-Bai9l2aQ.js";import"./Progress-AiGYgwns.js";import"./IconAdd-F132zUj9.js";import"./Checkbox-ByU3c-4h.js";import"./IconInfo-DdF1towk.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
