import{j as e}from"./jsx-runtime-DYNaFl5D.js";import{r as i}from"./iframe-SPcc0_If.js";import{M as C,N as I}from"./NestedMenu-DDcQ_1D4.js";import{B as b}from"./Button-DKBYMXNB.js";import{I as y}from"./IconArrowDownloadFilled-kPARq8Pp.js";import{I as g,a as h,b as x}from"./IconBeach-Bth4338i.js";import{I as M}from"./IconMore-CoAMIxO4.js";import{I as O}from"./IconCheckmark-Cz_Su7Pv.js";import{I as n}from"./IconSettings-Cjm1_tH0.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-toYm9qRe.js";import"./index-B1n-3Wt0.js";import"./Text-B-GWGDgE.js";import"./helpers-DBMT0dM3.js";import"./index-DYDl_GcV.js";import"./types-MvG839B4.js";import"./Popover-cyTmrIkG.js";import"./IconDismiss-BdESZXuR.js";import"./Link-BMAdX2HH.js";import"./index-DUq5tCO6.js";import"./CollapseGroup-D1-dIGx3.js";import"./Divider-sF-Ggz6a.js";import"./AnimatePresenceWrapper-BYAAiMQB.js";import"./IconChevronDown-B08O221n.js";import"./IconChevronUp-Cun4vSJz.js";import"./IconChevronRight-Bx1u_5cN.js";import"./AvatarGroup-B5lMWuN3.js";import"./DropzoneFileUpload-uDhqHwN-.js";import"./Label-CiaeJfoi.js";import"./useFormProps-DtJeLY0c.js";import"./ErrorMessage-Dpo3MrAn.js";import"./IconDynamicComponent-BEaMqZU3.js";import"./Snackbar-DME95ZMx.js";import"./Alert-zSgzKfYn.js";import"./IconDismissFilled-Di_m5r0r.js";import"./Progress-SsVI7u4o.js";import"./IconAdd-aIuduK_j.js";import"./Checkbox-BQqscDbd.js";import"./IconInfo-QrpURRIW.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
