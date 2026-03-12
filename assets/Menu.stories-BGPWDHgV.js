import{j as e}from"./jsx-runtime-Bu_ALF8p.js";import{r as i}from"./iframe-BB1NJQAI.js";import{M as C,N as I}from"./NestedMenu-CSRGjBaq.js";import{B as b}from"./Button-CTf_FFJO.js";import{I as y}from"./IconArrowDownloadFilled-SmDXt9t4.js";import{I as g,a as h,b as x}from"./IconBeach-Dr7uv34z.js";import{I as M}from"./IconMore-ntI_O4Fp.js";import{I as O}from"./IconCheckmark-DiwRn7m-.js";import{I as n}from"./IconSettings-DPp1MePv.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-_rvudy_3.js";import"./index-ChefNaU4.js";import"./Text-DT0qOwYD.js";import"./helpers-B3DVZXmr.js";import"./index-DYDl_GcV.js";import"./types-DTzXgx9a.js";import"./Popover-B3PN6YYf.js";import"./IconDismiss-CvMEOUu2.js";import"./Link-B4PYN49g.js";import"./index-Db2o8h8F.js";import"./CollapseGroup-CN8QaNJa.js";import"./Divider-CIeFjtPb.js";import"./AnimatePresenceWrapper-8nEPLPyb.js";import"./IconChevronDown-CoBsNG8O.js";import"./IconChevronUp-_TDdrPYO.js";import"./IconChevronRight-boR5c4Bs.js";import"./AvatarGroup-Fqs2Laky.js";import"./DropzoneFileUpload-Fx0NFjzc.js";import"./Label-DLpS5inS.js";import"./useFormProps-D8jyCiMY.js";import"./ErrorMessage-BiDOt-u8.js";import"./IconDynamicComponent-yZgRfUGb.js";import"./Snackbar-DHa6zAGI.js";import"./Alert-Dnk4LFbG.js";import"./IconDismissFilled-CLNppIBn.js";import"./Progress-COOYi71m.js";import"./IconAdd-oo-wJ3XN.js";import"./Checkbox-CtQ88620.js";import"./IconInfo-CTTdYzE6.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
