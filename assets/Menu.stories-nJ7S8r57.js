import{j as e}from"./jsx-runtime-iut7bCLI.js";import{r as i}from"./iframe-DMdrSwrB.js";import{M as C,N as I}from"./NestedMenu-DCawQdXt.js";import{B as b}from"./Button-BucxkUHf.js";import{I as y}from"./IconArrowDownloadFilled-DkJQElhu.js";import{I as g,a as h,b as x}from"./IconBeach-_CQ_5GYu.js";import{I as M}from"./IconMore-BkCyC34O.js";import{I as O}from"./IconCheckmark-0fz62h_J.js";import{I as n}from"./IconSettings-CklhfQ_2.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BEnh0xUy.js";import"./index-DFpEcNpv.js";import"./Text-Csbx5Mpb.js";import"./helpers-UaYMJ5Lz.js";import"./index-DYDl_GcV.js";import"./types-obu7jrHv.js";import"./Popover-CQGfM3xk.js";import"./IconDismiss-D8ZBO6ts.js";import"./Link-BRXpJSfl.js";import"./index-CU_6io2K.js";import"./CollapseGroup-C4xTss2d.js";import"./Divider-Bhf2mux5.js";import"./AnimatePresenceWrapper-VTlFgzP-.js";import"./IconChevronDown-CyGBEWY1.js";import"./IconChevronUp-Du9Azii8.js";import"./IconChevronRight-5MRUfZ0u.js";import"./AvatarGroup-CqUL4fO_.js";import"./DropzoneFileUpload-DAli1GvK.js";import"./Label-Bnt23OWf.js";import"./useFormProps-BXd8NQTR.js";import"./ErrorMessage-BavO4dqa.js";import"./IconDynamicComponent-CGVNtfYX.js";import"./Snackbar-ChnHL36q.js";import"./Alert-BmcFc-5H.js";import"./IconDismissFilled-Cc548mdA.js";import"./Progress-DN7Rgw4h.js";import"./IconAdd-CMcElvt0.js";import"./Checkbox-C8etayjj.js";import"./IconInfo-iFnVagDf.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
