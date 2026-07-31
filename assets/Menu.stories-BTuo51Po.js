import{j as e}from"./jsx-runtime-BiqM-ecW.js";import{r as i}from"./iframe-8txO-2QW.js";import{M as C,N as I}from"./NestedMenu-BfCpRAQ6.js";import{B as b}from"./Button-s8UnDnUL.js";import{I as y}from"./IconArrowDownloadFilled-DRa18GaT.js";import{I as g,a as h,b as x}from"./IconBeach-Qhqjgypp.js";import{I as M}from"./IconMore-CuiWxSyv.js";import{I as O}from"./IconCheckmark-BXD_0S--.js";import{I as n}from"./IconSettings-CwPpbMaz.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-vj0e5k7v.js";import"./index-Bz2E60yl.js";import"./Text-t4HXzC8T.js";import"./helpers-Ho8Wwbj1.js";import"./index-AboGxAif.js";import"./types-Mv-0p2EE.js";import"./index-VWooKi48.js";import"./useOnOutsideClick-BBgmK26U.js";import"./CollapseGroup-CI5Nveii.js";import"./Divider-D2E7-Y4o.js";import"./AnimatePresenceWrapper-B5mpBP4b.js";import"./IconChevronDown-B2j6Lzua.js";import"./IconChevronUp-YGk1wzPO.js";import"./IconChevronRight-SL0m99Bk.js";import"./AvatarGroup-C_eXmzYI.js";import"./DropzoneFileUpload-gCn0avX-.js";import"./Label-C7686ZOL.js";import"./useFormProps-0QM-rMaz.js";import"./ErrorMessage-BLKtwRy7.js";import"./IconDynamicComponent-CYGUY6tn.js";import"./Snackbar-DkLik93A.js";import"./Alert-rjoUFM6N.js";import"./IconDismissFilled-odzfKs1W.js";import"./Progress-B21-AYUf.js";import"./IconAdd-CIFf3V1Q.js";import"./Checkbox-CdGXssq_.js";import"./Popover-C-FU8yaF.js";import"./IconDismiss-JvV-OIdj.js";import"./Link-D1ZnnrhJ.js";import"./IconInfo-DaIomXZJ.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
