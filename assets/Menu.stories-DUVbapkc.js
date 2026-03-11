import{j as e}from"./jsx-runtime-m3b_6OT1.js";import{r as i}from"./iframe-oM5UKC75.js";import{M as C,N as I}from"./NestedMenu-B16O65kl.js";import{B as b}from"./Button-DRl_tK4r.js";import{I as y}from"./IconArrowDownloadFilled-BAO9ilPR.js";import{I as g,a as h,b as x}from"./IconBeach-BF3KgWcr.js";import{I as M}from"./IconMore-CJybr3K0.js";import{I as O}from"./IconCheckmark-DHzwmAqx.js";import{I as n}from"./IconSettings-C5Y4F5Zm.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CYG0JmLY.js";import"./index-vglmsqVc.js";import"./Text-1CEUeWW4.js";import"./helpers-BKxxssDc.js";import"./index-DYDl_GcV.js";import"./types-BjN0AaN3.js";import"./Popover-D4hZr9nz.js";import"./IconDismiss-WzKnNALp.js";import"./Link-Aa0-TXF1.js";import"./index-DFLm7QBz.js";import"./CollapseGroup-B_WS4wlI.js";import"./Divider-oK7Q8xmF.js";import"./AnimatePresenceWrapper-DgOu0Gc7.js";import"./IconChevronDown-Dv1b2jh1.js";import"./IconChevronUp-CgC7KZhy.js";import"./IconChevronRight-AxCViqji.js";import"./AvatarGroup-DQXG57V2.js";import"./DropzoneFileUpload-CqULd0Mg.js";import"./Label-62bGwlHv.js";import"./useFormProps-DcUF_9Ii.js";import"./ErrorMessage-DAY-EUCN.js";import"./IconDynamicComponent-BHdqEJBx.js";import"./Snackbar-C3wvyUtT.js";import"./Alert-DDH4DkK7.js";import"./IconDismissFilled-DJ-r4RAA.js";import"./Progress-CBTJUYV8.js";import"./IconAdd-A_aELW1p.js";import"./Checkbox-CCNChKMO.js";import"./IconInfo-Dj6n6JmB.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
