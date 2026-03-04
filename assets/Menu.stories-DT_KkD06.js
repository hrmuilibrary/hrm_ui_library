import{j as e}from"./jsx-runtime-Q5-DiG6u.js";import{r as i}from"./iframe-BBUYj7ZT.js";import{M as C,N as I}from"./NestedMenu-D8FvHqa_.js";import{B as b}from"./Button-fqGs5a32.js";import{I as y}from"./IconArrowDownloadFilled-gDuFgWg7.js";import{I as g,a as h,b as x}from"./IconBeach-SklM5dlk.js";import{I as M}from"./IconMore-HrZ2hvFz.js";import{I as O}from"./IconCheckmark-WoIpaAzH.js";import{I as n}from"./IconSettings-H8j9Y7ZQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-C3sz6z6D.js";import"./index-DEwYHVmm.js";import"./Text-CjbCI6fB.js";import"./helpers-BDkZEH5P.js";import"./index-DYDl_GcV.js";import"./types-Cw6t2Ei8.js";import"./Popover-Do26jeop.js";import"./IconDismiss-C9pSG2Co.js";import"./Link-Br13RKiF.js";import"./index-DotBscbq.js";import"./CollapseGroup-7KFItPNP.js";import"./Divider-7xshQskL.js";import"./AnimatePresenceWrapper-Bc5uWO5n.js";import"./IconChevronDown-D_iZ8BiH.js";import"./IconChevronUp-DAxTaMxG.js";import"./IconChevronRight-D6tVulu9.js";import"./AvatarGroup-CIPI2VT3.js";import"./DropzoneFileUpload-BkV7nxBB.js";import"./Label-BddqEAIL.js";import"./useFormProps-CKpWdKZV.js";import"./ErrorMessage-Ug8uot8S.js";import"./IconDynamicComponent-CQ2jGYfb.js";import"./Snackbar-C_aeHJot.js";import"./Alert-yfFDKST_.js";import"./IconDismissFilled-lvujuGxd.js";import"./Progress-B6i2yMJ2.js";import"./IconAdd-DBQQf88s.js";import"./Checkbox-BUUz4F9U.js";import"./IconInfo-WymG3m07.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
